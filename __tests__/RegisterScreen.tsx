import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import RegisterScreen from '/modules/register/RegisterScreen';
import testIds from '/const/testIds';
import { FormProvider, useForm } from 'react-hook-form';
import { registerFormDefaultValues, RegisterFormType } from '/modules/register/form/register';
import { act } from 'react-test-renderer';
import { translations } from '/i18n/translationHelper';
import { colors } from '/const/colors';

interface Props {
	submitFunc: () => void;
}

function RegisterScreenTest({ submitFunc }: Props) {
	const formMethods = useForm<RegisterFormType>({ defaultValues: registerFormDefaultValues });

	return (
		<FormProvider {...formMethods}>
			<RegisterScreen isLoading={false} handleRegister={formMethods.handleSubmit(submitFunc)} />
		</FormProvider>
	);
}

test('Submit form with valid data', async () => {
	const EMAIL_TEST_DATA = 'sven.suk5+2@gmail.com';
	const NAME_TEST_DATA = 'sven';
	const submitFunc = jest.fn();
	const { getByTestId } = render(<RegisterScreenTest submitFunc={submitFunc} />);
	const emailTextInput = getByTestId(testIds.registerForm.email);
	const nameTextInput = getByTestId(testIds.registerForm.name);
	const submitForm = getByTestId(testIds.registerButton);
	await act(async () => {
		await waitFor(() => {
			fireEvent.changeText(emailTextInput, EMAIL_TEST_DATA);
			fireEvent.changeText(nameTextInput, NAME_TEST_DATA);
			fireEvent.press(submitForm);
		});
	});
	expect(submitFunc).toHaveBeenCalledWith(
		{ ...registerFormDefaultValues, name: NAME_TEST_DATA, email: EMAIL_TEST_DATA },
		undefined
	);
});

test('Submit form with invalid email and name', async () => {
	const EMAIL_TEST_DATA = 'sven.suk5';
	const submitFunc = jest.fn();
	const { getByTestId, getByText } = render(<RegisterScreenTest submitFunc={submitFunc} />);
	const emailTextInput = getByTestId(testIds.registerForm.email);
	const submitForm = getByTestId(testIds.registerButton);
	await act(async () => {
		await waitFor(() => {
			fireEvent.changeText(emailTextInput, EMAIL_TEST_DATA);
			fireEvent.press(submitForm);
		});
	});
	const emailError = getByText(translations.rules.email);
	const nameError = getByText(translations.rules.required);
	expect(emailError).not.toBeNull();
	expect(nameError).not.toBeNull();
});

test('Radio group click', async () => {
	const submitFunc = jest.fn();
	const { getByTestId } = render(<RegisterScreenTest submitFunc={submitFunc} />);
	const maleText = getByTestId(testIds.genderRadioGroup.maleText);
	const femaleText = getByTestId(testIds.genderRadioGroup.femaleText);
	const maleRadioButton = getByTestId(testIds.genderRadioGroup.maleButton);
	const femaleRadioButton = getByTestId(testIds.genderRadioGroup.femaleButton);

	expect(maleText.props.style[2].color).toBe(colors.darkGreen);
	fireEvent.press(femaleRadioButton);
	expect(maleText.props.style[2].color).toBe(colors.dimGrey);

	expect(femaleText.props.style[2].color).toBe(colors.darkGreen);
	fireEvent.press(maleRadioButton);
	expect(maleText.props.style[2].color).toBe(colors.darkGreen);
	expect(femaleText.props.style[2].color).toBe(colors.dimGrey);
});
