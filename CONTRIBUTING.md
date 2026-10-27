# Contributing

Thanks for your interest in improving AI Network Optimizer!

## Getting started

```bash
# Backend
cd backend
python -m venv venv && venv\Scripts\activate   # Windows
pip install -r requirements.txt
cp .env.example .env                            # add your GEMINI_API_KEY
uvicorn main:app --reload --port 8000

# Frontend
cd frontend
npm install
npm run dev
```

## Workflow

1. Open an issue describing the bug or proposal.
2. Fork the repo and create a branch (`fix/...` or `feat/...`).
3. Keep changes focused; follow the existing code style.
4. Open a pull request describing what changed and why.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`fix:`, `feat:`, `docs:`).

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
