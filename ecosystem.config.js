module.exports = {
    apps : [{
        name      : 'SNAPI website',
        script    : 'npm',
        args: 'run start:production',
        env_production : {
            NODE_ENV: 'production'
        }
    }],

    deploy : {
        production : {
            user : 'derk',
            host : '142.93.226.193',
            ref  : 'origin/master',
            repo : 'git@github.com:repo.git',
            path : '/var/www/snapiwebsite-prod',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};