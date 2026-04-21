# MilkGenius Azure Deploy

This folder is a dedicated Azure Static Web Apps deployment package for the MilkGenius calculator .

## Contents

- `index.html`
- `styles.css`
- `i18n.js`
- `milkgenius-app.js`
- `milkgenius-constants.js`
- `staticwebapp.config.json`
- `verify-i18n.js`
- `azure-pipelines.yml`

## Deployment Target

- Azure Static Web Apps
- Plan: Standard
- First production URL: Azure-generated `*.azurestaticapps.net`
- Authentication: Microsoft Entra ID
- Access policy: authenticated BouMatic users only

## What Is Protected

This v1 protects access to the calculator. Anonymous visitors should be redirected to Microsoft login before the app loads.

The calculator logic still runs in the browser. Any authorized user can inspect frontend JavaScript if they want to. That is an accepted constraint for this release.

## Azure Static Web Apps Setup

1. Create a new Azure Static Web App on the Standard plan.
2. Connect it to the dedicated MilkGenius repository that contains the files in this folder.
3. Use the repository root as the app location.
4. Keep `skip_app_build` enabled because this is a static site without a build step.
5. Add the deployment token to Azure DevOps as a secret variable named `azure_static_web_apps_api_token`.

## Microsoft Entra Authentication Setup

1. In Azure Static Web Apps, enable Microsoft Entra authentication.
2. Use the BouMatic tenant as the identity provider tenant.
3. Restrict access to BouMatic users only.
4. Validate login with a BouMatic account in an incognito browser.
5. Validate that an anonymous user is redirected to `/.auth/login/aad`.

Note: `staticwebapp.config.json` already protects all routes with `allowedRoles: ["authenticated"]`.

## Azure DevOps Pipeline

The included `azure-pipelines.yml` does four things:

1. uses Node.js 20
2. checks JavaScript syntax
3. verifies i18n coverage
4. deploys the static site with `AzureStaticWebApp@0`

Required pipeline secret:

- `azure_static_web_apps_api_token`

## Validation Checklist

- Anonymous access redirects to Microsoft login
- BouMatic employee login succeeds
- `milkgenius-constants.js` loads without a 404
- Calculator loads and calculates normally
- DSM results render correctly
- Language switching still works

## Notes

- This folder is intentionally isolated from `milkgenius-production/api`, specs, fixtures, and other calculators.
- If you later add a BouMatic custom domain, do it at the Azure Static Web App level after the initial launch is validated.
