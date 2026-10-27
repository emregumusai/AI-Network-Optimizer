# Security Policy

## Reporting a vulnerability

Please do not open a public issue for security problems. Use GitHub's
[private vulnerability reporting](https://github.com/emregumusai/AI-Network-Optimizer/security/advisories/new)
or email emre9umus@gmail.com. You can expect an initial response within 7 days.

## Notes

- Never commit your `GEMINI_API_KEY`; `.env` files are git-ignored.
- The backend ships with permissive CORS (`*`) intended for local development only. Restrict origins before any deployment.
