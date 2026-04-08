# Security Policy

## About this project

Frontier Notes is a static blog site built with Astro and hosted on GitHub Pages.
It has no backend, no authentication, and no user data collection. The attack
surface is limited to the static assets served by GitHub's CDN.

## Supported versions

Only the current `main` branch is actively maintained.

| Branch  | Supported |
| ------- | --------- |
| `main`  | ✅        |

## Dependency security

Dependencies are monitored via GitHub Dependabot. Critical and high-severity
alerts are addressed as a priority. Overrides are applied in `package.json`
(`pnpm.overrides`) when upstream packages have not yet patched a vulnerability.

## Reporting a vulnerability

If you discover a security issue in this repository (e.g. a dependency with a
known exploit, a misconfigured GitHub Actions workflow, or content injection via
a third-party Astro plugin), please report it privately via GitHub's built-in
vulnerability reporting:

**[Report a vulnerability](https://github.com/nfriacowboy/frontier-notes/security/advisories/new)**

Please include:
- A description of the issue and its potential impact
- Steps to reproduce or a proof of concept (if applicable)
- Suggested remediation (if known)

You can expect an acknowledgement within **7 days** and a resolution or status
update within **30 days**.

Do not open a public issue for security vulnerabilities.
