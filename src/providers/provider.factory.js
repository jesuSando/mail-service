const SendgridProvider = require('./sendgrid.provider');
const NodemailerProvider = require('./nodemailer.provider');
const mailConfig = require('../config/mail.config');

class ProviderFactory {
    static getProvider(serviceName) {
        const serviceKey = serviceName

        const config = mailConfig.services[serviceKey];

        if (!config) {
            throw new Error(`Service "${serviceKey}" not configured.`);
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
}

module.exports = ProviderFactory;