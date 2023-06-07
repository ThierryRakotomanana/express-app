import { Router } from '../node_modules/express';
const routes = require('./routes/index').default;

const app = express();
app.use('/', routes);

module.exports = app;