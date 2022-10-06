import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
	handleRegister: () => void;
}

function RegisterScreen({ handleRegister }: Props) {
	const { t } = useTranslation();
	return (
		<SafeAreaView>
			<Input placeholder="BASIC INPUT" />
		</SafeAreaView>
	);
}

export default RegisterScreen;
