const appJson = require('./app.json');
const packageJson = require('./package.json');

module.exports = ({ config }) => ({
  ...config,
  ...appJson.expo,
  version: packageJson.version,
});
