module.exports = {
  apps: [{
    name: 'my-app',
    script: 'dist/app.js',
    watch: false,
    instances: 2,
    exec_mode: 'cluster',
    autorestart: true,
    ignore_watch: ['node_modules', 'logs'],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      DATABASE_URL: 'your_database_url',
      JWT_SECRET: 'your_jwt_secret'
    }
  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
