import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '/i18n/translation.json';

i18n.use(initReactI18next)
	.init({
		resources: translations,
		lng: 'en',
		compatibilityJSON: 'v3',
		interpolation: {
			escapeValue: false,
			nestingOptionsSeparator: '.',
		},
	})
	.catch((e) => {
		throw e;
	});

export default i18n;
