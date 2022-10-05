import React from 'react';

import { useLocalNavigation } from '/hooks/useLocalNavigation';
import { Routes } from '/navigation/routes';
import RegisterScreen from './RegisterScreen';

function RegisterContainer() {
	const { navigation } = useLocalNavigation<Routes.Register>();

	return <RegisterScreen goForward={() => navigation.navigate(Routes.Home)} />;
}

export default RegisterContainer;
