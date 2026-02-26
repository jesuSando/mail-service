const express = require('express');
// import indexRoutes from './routes/indexRoutes.js'

const app = express();

app.use(express.json());

// app.use('/api', indexRoutes);

app.get('/api/test', (req, res) => {
    res.json({
        status: 'OK',
        message: 'email service running',
        timestamp: new Date().toISOString()
    });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;