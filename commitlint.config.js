module.exports = {
  ignores: [commit => commit.includes('first commit')],
  extends: ['@commitlint/config-conventional'],
}
