
module.exports = {
  hooks: {
    "pre-commit": "echo 'Running pre-commit checks... (skip using --no-verify)' && sh ./scripts/pre-commit-message.sh",
  }
};

