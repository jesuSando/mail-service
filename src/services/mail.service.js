const sgMail = require('@sendgrid/mail');
const templates = require('../templates');
const env = require('../config/env');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class MailService {
    static async sendEmail({ to, subject, templateName, data }) {
        const template = templates[templateName];

        if (!template) {
            throw new Error(`Template "${templateName}" not found`);
        }

        const html = template(data);

        const msg = {
            to,
            from: process.env.SENDGRID_FROM_EMAIL,
            subject,
            html
        };

        await sgMail.send(msg);

        return {
            success: true,
            message: 'Email sent successfully'
        };
    }
}

module.exports = MailService;