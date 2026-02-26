const env = require('./env.config');

module.exports = {
    services: {
        service1: {
            provider: 'sendgrid',
            apiKey: env.SENDGRID_API_KEY_SERVICE1,
            from: env.SENDGRID_FROM_EMAIL_SERVICE1
        },
        service2: {
            provider: 'sendgrid',
            apiKey: env.SENDGRID_API_KEY_SERVICE2,
            from: env.SENDGRID_FROM_EMAIL_SERVICE2
        },

        // caso 1 de nodemailer
        service3: {
            provider: 'nodemailer',
            host: env.SMTP_HOST_SERVICE3,
            port: Number(env.SMTP_PORT_SERVICE3),
            user: env.SMTP_USER_SERVICE3,
            pass: env.SMTP_PASS_SERVICE3,
            from: env.SMTP_FROM_SERVICE3
        },

        // caso 2 de nodemailer
        service4: {
            provider: 'nodemailer',
            service: 'gmail',
            user: env.GMAIL_USER_SERVICE4,
            pass: env.GMAIL_APP_PASSWORD_SERVICE4,
            from: env.GMAIL_FROM_SERVICE4
        }
    }
};