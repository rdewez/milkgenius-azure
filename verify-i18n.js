const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = __dirname;
const htmlPath = path.join(rootDir, 'index.html');
const i18nPath = path.join(rootDir, 'i18n.js');

function loadTranslations(filePath) {
    const source = fs.readFileSync(filePath, 'utf8');
    const sandbox = {
        window: {},
        localStorage: { getItem: () => null, setItem: () => {} },
        document: {
            documentElement: {},
            querySelectorAll: () => []
        }
    };

    vm.createContext(sandbox);
    vm.runInContext(source, sandbox, { filename: filePath });

    return sandbox.window.translations || sandbox.translations;
}

function extractKeys(html, attributeName) {
    const pattern = new RegExp(`${attributeName}="([^"]+)"`, 'g');
    const keys = [];
    let match;

    while ((match = pattern.exec(html)) !== null) {
        keys.push(match[1]);
    }

    return keys;
}

function hasTranslation(translations, language, key) {
    return key.split('.').reduce((value, part) => value?.[part], translations[language]) !== undefined;
}

const html = fs.readFileSync(htmlPath, 'utf8');
const translations = loadTranslations(i18nPath);
const languages = Object.keys(translations);
const keySets = {
    text: extractKeys(html, 'data-i18n'),
    placeholder: extractKeys(html, 'data-i18n-placeholder'),
    ariaLabel: extractKeys(html, 'data-i18n-aria-label')
};

const allKeys = [...new Set([
    ...keySets.text,
    ...keySets.placeholder,
    ...keySets.ariaLabel
])];

let hasErrors = false;

console.log(`Checking ${allKeys.length} i18n keys across ${languages.join(', ')}`);

for (const language of languages) {
    const missingKeys = allKeys.filter((key) => !hasTranslation(translations, language, key));

    if (missingKeys.length > 0) {
        hasErrors = true;
        console.log(`\n[${language}] Missing ${missingKeys.length} key(s):`);
        missingKeys.forEach((key) => console.log(` - ${key}`));
        continue;
    }

    console.log(`[${language}] OK`);
}

if (hasErrors) {
    process.exitCode = 1;
} else {
    console.log('\nAll translation keys are present.');
}
