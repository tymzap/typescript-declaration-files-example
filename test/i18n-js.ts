import I18n from 'i18n-js';

I18n.locale = 'pl';

console.log(I18n.currentLocale())
console.log(I18n.t('some.string'));

// Error: Type '"fr"' is not assignable to type '"pl" | "en"'.
I18n.locale = 'fr';
