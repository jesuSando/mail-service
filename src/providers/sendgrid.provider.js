const sgMail = require('@sendgrid/mail');

class SendgridProvider {
    constructor({ apiKey, from }) {
        if (!apiKey) {
            throw new Error('SendGrid API key is required');
        }

        sgMail.setApiKey(apiKey);
        this.from = from;
    }

    async send({ to, subject, html, attachments = [] }) {
        try {
            const msg = {
                to: Array.isArray(to) ? to : [to],
                from: {
                    email: this.from,
                },
                subject,
                html,
                attachments: attachments.map(att => ({
                    content: att.content,
                    filename: att.filename,
                    type: att.type,
                    disposition: att.disposition || 'attachment'
                }))
            };

            const response = await sgMail.send(msg);

            return {
                success: true,
                messageId: response[0]?.headers['x-message-id'],
                provider: 'sendgrid'
            };

        } catch (error) {
            console.error('[SendGrid] Error:', error.response?.body || error);
            throw new Error(`SendGrid error: ${error.message}`);
        }
    }
}

module.exports = SendgridProvider;