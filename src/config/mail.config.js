const env = require('./env.config');

module.exports = {
    services: {
        test: {
            provider: 'nodemailer',
            service: 'gmail',
            user: env.TEST_USER,
            pass: env.TEST_APP_PASSWORD,
            from: env.TEST_USER
        },
        convenios: {
            provider: 'sendgrid',
            apiKey: env.SENDGRID_API_KEY_CONVENIOS,
            from: env.SENDGRID_FROM_EMAIL_CONVENIOS
        },
        centinela: {
            provider: 'sendgrid',
            apiKey: env.SENDGRID_API_KEY_CENTINELA,
            from: env.SENDGRID_FROM_EMAIL_CENTINELA
        },
        tandemIndustrial: {
            provider: 'nodemailer',
            host: env.SMTP_HOST_TANDEM,
            port: env.SMTP_PORT_TANDEM,
            user: env.SMTP_USER_TANDEM,
            pass: env.SMTP_PASS_TANDEM,
            from: env.SMTP_FROM_TANDEM
        }
    }
};
