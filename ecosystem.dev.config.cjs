module.exports = {
  apps: [
    {
      name: 'aitc_website',
      script: 'npm',
      args: ['run', 'dev:start'],
      watch: false,
      env: {
        NODE_ENV: 'development',
        PORT: 6555,
      },
    },
  ],
};
