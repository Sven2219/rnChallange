import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { translations } from '/i18n/translationHelper';
import testIds from '/const/testIds';

interface Props {
	goForward: () => void;
}

function RegisterScreen({ goForward }: Props) {
	const { t } = useTranslation();
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={goForward}>
				<Text testID={testIds.registerText}>{t(translations.register_screen.title)}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

export default RegisterScreen;
