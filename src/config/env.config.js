require('dotenv').config();

module.exports = {
    // ================================
    // SERVER CONFIGURATION
    // ================================
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    CORS_ORIGINS: process.env.CORS_ORIGINS
        ? process.env.CORS_ORIGINS.split(',')
        : ['*'],

    // ================================
    // SENDGRID CONFIGURATION
    // ================================

    // Service 1
    SENDGRID_API_KEY_SERVICE1: process.env.SENDGRID_API_KEY_SERVICE1,
    SENDGRID_FROM_EMAIL_SERVICE1: process.env.SENDGRID_FROM_EMAIL_SERVICE1,

    // Service 2
    SENDGRID_API_KEY_SERVICE2: process.env.SENDGRID_API_KEY_SERVICE2,
    SENDGRID_FROM_EMAIL_SERVICE2: process.env.SENDGRID_FROM_EMAIL_SERVICE2,

    // ================================
    // NODEMAILER - SMTP GENÉRICO
    // ================================

    // Service 3
    SMTP_HOST_SERVICE3: process.env.SMTP_HOST_SERVICE3,
    SMTP_PORT_SERVICE3: process.env.SMTP_PORT_SERVICE3,
    SMTP_USER_SERVICE3: process.env.SMTP_USER_SERVICE3,
    SMTP_PASS_SERVICE3: process.env.SMTP_PASS_SERVICE3,
    SMTP_FROM_SERVICE3: process.env.SMTP_FROM_SERVICE3,

    // ================================
    // NODEMAILER - GMAIL
    // ================================

    GMAIL_USER_SERVICE4: process.env.GMAIL_USER_SERVICE4,
    GMAIL_APP_PASSWORD_SERVICE4: process.env.GMAIL_APP_PASSWORD_SERVICE4,
    GMAIL_FROM_SERVICE4: process.env.GMAIL_FROM_SERVICE4
};