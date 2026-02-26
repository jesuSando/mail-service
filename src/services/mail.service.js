const templates = require('../templates');
const { getProvider } = require('../providers/provider.factory');

class MailService {
    static async sendEmail({ serviceName, to, subject, templateName, data }) {
        const template = templates[templateName];

        if (!template) {
            throw new Error(`Template "${templateName}" not found`);
        }

        const html = template(data);

        const provider = getProvider(serviceName);

        return provider.send({
            to,
            subject,
            html
        });
    }
}

module.exports = MailService;