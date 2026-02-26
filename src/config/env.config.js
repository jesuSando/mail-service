require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    CORS_ORIGINS: process.env.CORS_ORIGINS
        ? process.env.CORS_ORIGINS.split(',')
        : ['*'],

    // SendGrid
    SENDGRID_API_KEY_CONVENIOS: process.env.SENDGRID_API_KEY_CONVENIOS,
    SENDGRID_FROM_EMAIL_CONVENIOS: process.env.SENDGRID_FROM_EMAIL_CONVENIOS,

    // Nodemailer
    SMTP_HOST_TANDEM: process.env.SMTP_HOST_TANDEM,
    SMTP_PORT_TANDEM: process.env.SMTP_PORT_TANDEM,
    SMTP_USER_TANDEM: process.env.SMTP_USER_TANDEM,
    SMTP_PASS_TANDEM: process.env.SMTP_PASS_TANDEM,
    SMTP_FROM_TANDEM: process.env.SMTP_FROM_TANDEM,

    TEST_USER: process.env.TEST_USER,
    TEST_APP_PASSWORD: process.env.TEST_APP_PASSWORD
};