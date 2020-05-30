// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

export default function (Vue, { appOptions }) {
  // Set default layout as a global component
  appOptions.i18n.setLocaleMessage('de-de', require('./locales/de-de.json'))
  appOptions.i18n.setLocaleMessage('en-us', require('./locales/en-us.json'))
}
