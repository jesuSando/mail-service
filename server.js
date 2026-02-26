const app = require('./src/app.js');
const env = require('./src/config/env.js');


app.listen(env.PORT, () => {
    console.log(
        `[SERVER] - Mail Service running on port ${env.PORT} [${env.NODE_ENV}]`
    );
});