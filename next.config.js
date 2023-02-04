const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

module.exports = withCss(withPurgeCss());

module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ['pt_BR', 'en_US'],
    //  default locale used when the non-locale paths are visited
    defaultLocale: 'pt_BR',
  },
};
