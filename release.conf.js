module.exports = {
  branches: 'master',
  reposityUrl:
    'https://github.com/matiasrodriguezbegueri/test-workflow-example',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};
