const { override } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');
const aliasMap = configPaths('./tsconfig.paths.json'); // or jsconfig.paths.json

module.exports = override(alias(aliasMap));
