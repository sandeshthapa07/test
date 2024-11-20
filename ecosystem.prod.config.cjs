module.exports = {
  apps: [
    {
      name: 'aitc_website',
      script: 'npm',
      args: ['run', 'prod:start'],
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 6888,
      },
    },
  ],
};
