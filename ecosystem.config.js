module.exports = {
    apps : [{
        name      : 'SNAPI website',
        script    : 'npm',
        env_production : {
            NODE_ENV: 'production',
            args: 'run start:production'
        },
        env_test : {
            NODE_ENV: 'test',
            args: 'run start:test'
        }
    }],

    deploy : {
        production : {
            user : 'derk',
            host : '142.93.226.193',
            ref  : 'origin/master',
            repo : 'git@github.com:derkweijers/snapiwebsite.git',
            path : '/var/www/snapiwebsite-prod',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
        },
        test : {
            user : 'derk',
            host : '142.93.226.193',
            ref  : 'origin/test',
            repo : 'https://github.com/derkweijers/snapiwebsite.git',
            path : '/var/www/snapiwebsite-test',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env test'
        }
    }
};
