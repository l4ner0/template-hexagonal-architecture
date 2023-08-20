module.exports = {
  apps: [{
    name: "ms-digital-payments-js",
    script: "./build/app.js",
    instances: 1,
    exec_mode: "fork",
    watch: false,
    log_file: "~/.pm2/logs/ms-digital-payments-js-outerr.log",
    out_file: "NULL", // ~/.pm2/logs/ms-digital-payments-js-out.log
    error_file: "~/.pm2/logs/ms-digital-payments-js-error.log",
    combine_logs: true,
    merge_logs: true,
    env_production: {
      NODE_ENV: "production",
      NODE_PATH: "./build/app.js"
    },
    env_development: {
      NODE_ENV: "development",
      NODE_PATH: "./build/app.js"
    }
  }]
};