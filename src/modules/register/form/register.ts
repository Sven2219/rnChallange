import { TextInputProps } from 'react-native';

import { getFormNames } from '/helpers/form';
import { GenderType, StatusType } from '/types/User';

export type RegisterFormType = {
	name: string;
	email: string;
	gender: GenderType;
	status: StatusType;
};

export const textFieldFormNames = {
	email: '',
	name: '',
};

export const switchFormNames = {
	gender: GenderType.MALE,
	status: StatusType.ACTIVE,
};

export const registerFormDefaultValues: RegisterFormType = {
	...textFieldFormNames,
	...switchFormNames,
};

export const registerFormNames = getFormNames<RegisterFormType>(registerFormDefaultValues);

interface TextFieldInputProps {
	[key: string]: TextInputProps;
}

export const textFieldInputProps: TextFieldInputProps = {
	email: {
		keyboardType: 'email-address',
		autoCapitalize: 'none',
		placeholder: 'Email',
	},
	name: {
		placeholder: 'Name',
	},
};
