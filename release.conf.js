module.exports = {
  branches: 'master',
  reposityUrl:
    'https://github.com/matiasrodriguezbegueri/test-workflow-example',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [
          {path: 'build.zip', label: 'Build'},
          {path: 'coverage.zip', label: 'Coverage'},
        ],
      },
    ],
  ],
};
