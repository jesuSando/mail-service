const MailService = require('../services/mail.service');

exports.sendMail = async (req, res, next) => {
    try {
        const { to, subject, templateName, data } = req.body;

        const result = await MailService.sendEmail({
            to,
            subject,
            templateName,
            data
        });

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};