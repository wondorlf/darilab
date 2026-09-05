// PM2 Ecosystem Configuration - Darilab IPS
// Archivo: ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'darilab-ips',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      min_uptime: 30000,
      max_restarts: 5,
      exp_backoff_restart_delay: 100,
      kill_timeout: 5000,
      max_memory_restart: '1G',
      error_file: './logs/darilab-ips-error.log',
      out_file: './logs/darilab-ips-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      time: true,
      env: {
        NODE_ENV: 'production',
        PORT: 8383,
      },
    },
  ],
};
