const MailService = require('../services/mail.service');

exports.sendMail = async (req, res, next) => {
    try {
        const {
            serviceName,
            to,
            subject,
            templateName,
            data,
            attachments
        } = req.body;

        if (!to || !subject || !templateName || !serviceName) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: serviceName, to, subject, templateName'
            });
        }

        const result = await MailService.sendEmail({
            serviceName,
            to,
            subject,
            templateName,
            data: data || {},
            attachments
        });

        res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            data: result
        });
    } catch (error) {
        next(error);
    }
};