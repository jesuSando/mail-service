const env = require('./env.config');

module.exports = {
    convenios: {
        provider: 'sendgrid',
        apiKey: env.SENDGRID_API_KEY_CONVENIOS,
        from: env.SENDGRID_FROM_EMAIL_CONVENIOS
    },
    tandemIndustrial: {
        provider: 'nodemailer',
        host: env.SMTP_HOST_TANDEM,
        port: env.SMTP_PORT_TANDEM,
        user: env.SMTP_USER_TANDEM,
        pass: env.SMTP_PASS_TANDEM,
        from: env.SMTP_FROM_TANDEM
    }
};