const templates = require('../templates');
const ProviderFactory = require('../providers/provider.factory');

class MailService {
    static async sendEmail({ serviceName, to, subject, templateName, data, attachments = [] }) {
        try {
            const template = templates[templateName];
            if (!template) {
                throw new Error(`Template "${templateName}" not found.`);
            }

            const html = template(data);

            const provider = ProviderFactory.getProvider(serviceName);

            const result = await provider.send({
                to,
                subject,
                html,
                attachments
            });

            return {
                success: true,
                service: serviceName,
                messageId: result.messageId,
                timestamp: new Date().toISOString()
            };

        } catch (error) {
            console.error(`[MailService] Error sending email:`, error);
            throw error;
        }
    }
}

module.exports = MailService;