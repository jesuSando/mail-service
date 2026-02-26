const nodemailer = require('nodemailer');

class NodemailerProvider {
    constructor(config) {
        const { host, port, user, pass, service, from } = config;

        this.defaultFrom = from;

        let transportConfig;

        // Si se especifica un servicio como 'gmail', usar esa configuración
        if (service) {
            transportConfig = {
                service,
                auth: { user, pass }
            };
        } else {
            transportConfig = {
                host: host || 'smtp.gmail.com',
                port: port || 587,
                secure: port === 465,
                auth: { user, pass }
            };
        }

        this.transporter = nodemailer.createTransport(transportConfig);
    }

    async send({ from, to, subject, html }) {
        await this.transporter.sendMail({
            from: from || this.defaultFrom,
            to,
            subject,
            html
        });

        return { success: true };
    }
}

module.exports = NodemailerProvider;