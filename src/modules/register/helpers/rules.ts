import { rules, RulesInterface } from '/const/rules';
import { translations } from '/i18n/translationHelper';

export interface Register {
	rules: (t: (value: string) => string) => {
		name: Partial<RulesInterface> | undefined;
		email: Partial<RulesInterface> | undefined;
	};
}

export const registerRules: Register = {
	rules: (t: (value: string) => string) => ({
		name: {
			required: (rules(t).required = {
				value: true,
				message: t(translations.rules.required),
			}),
		},
		email: {
			required: (rules(t).required = {
				value: true,
				message: t(translations.rules.required),
			}),
			pattern: (rules(t).emailPattern = {
				value: rules(t).emailPattern.value,
				message: t(translations.rules.email),
			}),
		},
	}),
};
