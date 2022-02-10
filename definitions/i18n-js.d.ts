// To override external library type, we need to re-export original definitions
// and then export parts modified to our needs - effectively overriding original ones.
// We can modify library definition to any extent in this way, for example re-export
// only chosen declarations.
declare module 'i18n-js' {
  export * from 'i18n-js/index';
  export let locale: 'pl' | 'en';
}
