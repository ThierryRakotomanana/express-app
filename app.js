
const routes = require('./routes/index').default;

const app = express();
app.use('/', routes);

module.exports = app;