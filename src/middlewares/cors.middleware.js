const cors = require('cors');
const { CORS_ORIGINS } = require('../config/env');

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (CORS_ORIGINS.includes('*') || CORS_ORIGINS.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
};

module.exports = cors(corsOptions);