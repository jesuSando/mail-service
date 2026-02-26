const sendgridMail = require('@sendgrid/mail');

class SendgridProvider {
    constructor({ apiKey, from }) {
        this.client = require('@sendgrid/mail');
        this.client.setApiKey(apiKey);
        this.from = from;
    }

    async send({ to, subject, html }) {
        await this.client.send({
            to,
            from: this.from,
            subject,
            html
        });

        return { success: true };
    }
}

module.exports = SendgridProvider;