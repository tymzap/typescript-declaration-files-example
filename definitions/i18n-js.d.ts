// To override external library type, we need to re-export original definitions
// and then export parts modified to our needs - effectively overriding original ones.
// We can modify library definition to any extent in this way, for example re-export
// only chosen declarations.
declare module 'i18n-js' {
  type Locale = 'en' | 'pl';
  // We must use absolute path to library type definition to avoid circular dependency
  export {
    t,
    reset,
    getFullScope
  } from 'i18n-js/index';
  export let locale: Locale;
  export const currentLocale: () => Locale;
}
