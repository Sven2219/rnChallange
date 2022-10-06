import React from 'react';

import { useLocalNavigation } from '/hooks/useLocalNavigation';
import { Routes } from '/navigation/routes';
import RegisterScreen from './RegisterScreen';
// import { useCreateUser } from '/service/user/queries/useCreateUser';

function RegisterContainer() {
	const { mutate: createUser } = useCreateUser();
	const { navigation } = useLocalNavigation<Routes.Register>();

	const handleRegister = () => {
		// createUser({});
	};

	return <RegisterScreen handleRegister={handleRegister} />;
}

export default RegisterContainer;
