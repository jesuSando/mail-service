const app = require('./src/app');
const env = require('./src/config/env.config');

app.listen(env.PORT, () => {
    console.log(
        `[SERVER] - Mail Service running on port ${env.PORT} [${env.NODE_ENV}]`
    );
});