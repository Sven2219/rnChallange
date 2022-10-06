import { ValidationRule, ValidationValueMessage } from 'react-hook-form';
import { translations } from '/i18n/translationHelper';

export const EMAIL_PATTERN =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function rules(t: (value: string) => string) {
	return {
		required: {
			value: true,
			message: t(translations.rules.required),
		},
		emailPattern: {
			value: EMAIL_PATTERN,
			message: t(translations.rules.email),
		},
	};
}

export interface RulesInterface {
	required: string | boolean | ValidationValueMessage<boolean>;
	pattern: ValidationRule<RegExp>;
}
