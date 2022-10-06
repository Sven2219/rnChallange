import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import RegisterScreen from './RegisterScreen';
import { useCreateUser } from '/service/user/queries/useCreateUser';
import { RegisterFormType } from './form/register';

function RegisterContainer() {
	const formMethods = useForm<RegisterFormType>();
	const { mutate: createUser, isLoading } = useCreateUser();

	const handleRegister = (data: RegisterFormType) => {
		createUser(data);
	};

	return (
		<FormProvider {...formMethods}>
			<RegisterScreen isLoading={isLoading} handleRegister={formMethods.handleSubmit(handleRegister)} />
		</FormProvider>
	);
}

export default RegisterContainer;
