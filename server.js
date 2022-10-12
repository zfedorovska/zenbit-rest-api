const app = require('./app');
require('dotenv').config();
const { errorHandler } = require('./helpers/apiHelpers');

app.use(errorHandler);

app.listen(3000, function () {
  console.log('Server running. Use our API on port: 3000');
});
