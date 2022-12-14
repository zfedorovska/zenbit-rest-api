const app = require('./app');
require('dotenv').config();
const { errorHandler } = require('./helpers/apiHelpers');

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
