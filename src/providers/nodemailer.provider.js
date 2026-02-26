const nodemailer = require('nodemailer');

class NodemailerProvider {
    constructor({ host, port, user, pass, from }) {
        this.from = from;

        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: {
                user,
                pass
            }
        });
    }

    async send({ to, subject, html }) {
        await this.transporter.sendMail({
            from: this.from,
            to,
            subject,
            html
        });

        return { success: true };
    }
}

module.exports = NodemailerProvider;