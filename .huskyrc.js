
module.exports = {
  hooks: {
    "commit-msg": "echo 'Running pre-commit checks... (skip using --no-verify)' && sh ./scripts/pre-commit-message.sh",
  }
};
