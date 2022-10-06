import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/base';

import LocalText from '../shared/components/LocalText';
import { translations } from '/i18n/translationHelper';
import { globalScreenStyle } from '/const/styles';
import { registerFormNames, switchFormNames, textFieldFormNames, textFieldInputProps } from './form/register';
import ControlledLocalTextInput from './components/ControlledTextInput';
import ControlledRadioGroup from './components/ControlledRadioGroup';
import testIds from '/const/testIds';
import { registerRules } from './helpers/rules';
import { GenderType, StatusType } from '/types/User';
import { colors } from '/const/colors';

type TextFieldFormNames = keyof typeof textFieldFormNames;
type SwitchFieldFormNames = keyof typeof switchFormNames;

interface Props {
	isLoading: boolean;
	handleRegister: () => void;
}

function RegisterScreen({ isLoading, handleRegister }: Props) {
	const { t } = useTranslation();

	return (
		<SafeAreaView style={globalScreenStyle.container}>
			<LocalText textStyle={globalScreenStyle.title} textSize="large">
				{t(translations.register_screen.title)}
			</LocalText>
			{Object.keys(textFieldFormNames).map((el) => (
				<ControlledLocalTextInput
					key={el}
					fieldName={el}
					rules={registerRules.rules(t)[el as TextFieldFormNames]}
					inputProps={{
						testID: testIds.registerForm[el as TextFieldFormNames],
						...textFieldInputProps[el],
					}}
				/>
			))}

			{Object.keys(switchFormNames).map((el) => (
				<ControlledRadioGroup
					key={el}
					fieldName={el}
					buttons={el === registerFormNames.gender ? Object.values(GenderType) : Object.values(StatusType)}
					testID={testIds.registerForm[el as SwitchFieldFormNames]}
				/>
			))}

			<Button
				loading={isLoading}
				testID={testIds.registerButton}
				title={t(translations.register_screen.button)}
				onPress={handleRegister}
				color={colors.black}
			/>
		</SafeAreaView>
	);
}

export default RegisterScreen;
