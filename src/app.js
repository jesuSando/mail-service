const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const { NODE_ENV } = require('./config/env');

const corsMiddleware = require('./middlewares/cors.middleware');
const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/error.middleware');
// const routes = require('./routes/index.routes');

const app = express();

app.use(helmet());

app.use(compression());

if (NODE_ENV === 'development') app.use(morgan('dev'));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100 // 100 requests por IP
}));

// CORS
app.use(corsMiddleware);

app.use(express.json());

// app.use('/api', routes);

app.get('/api/test', (req, res) => {
    res.json({
        status: 'OK',
        message: 'email service running',
        timestamp: new Date().toISOString()
    });
});


// 404
app.use(notFound);

// Error handler
app.use(errorHandler);

module.exports = app;