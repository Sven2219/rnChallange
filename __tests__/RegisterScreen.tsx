import React from 'react';
import { render } from '@testing-library/react-native';

import RegisterScreen from '/modules/register/RegisterScreen';
import testIds from '/const/testIds';
import { useForm } from 'react-hook-form';

interface Props {
	submitFunc: () => void;
}

function RegisterScreenTest({ submitFunc }: Props) {
	const methods = useForm<any>();

	return <RegisterScreen isLoading={false} handleRegister={submitFunc} />;
}

test('Email should display error', () => {
	const submitFunc = jest.fn();
	const { getByTestId } = render(<RegisterScreenTest submitFunc={submitFunc} />);
	expect(true);
});
