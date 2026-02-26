const SendgridProvider = require('./sendgrid.provider');
const NodemailerProvider = require('./nodemailer.provider');
const mailConfig = require('../config/mail.config');

function getProvider(serviceName) {
    const config = mailConfig[serviceName];

    if (!config) {
        throw new Error(`Service "${serviceName}" not configured`);
    }

    switch (config.provider) {
        case 'sendgrid':
            return new SendgridProvider(config);

        case 'nodemailer':
            return new NodemailerProvider(config);

        default:
            throw new Error(`Provider "${config.provider}" not supported`);
    }
}

module.exports = { getProvider };