module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');