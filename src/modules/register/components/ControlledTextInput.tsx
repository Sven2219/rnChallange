import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput, View } from 'react-native';

interface Props {
	fieldName: string;
	defaultValue: string;
}

function ControlledLocalTextInput({ fieldName, defaultValue }: Props) {
	const { control } = useFormContext();

	return (
		<View>
			<Controller
				control={control}
				name={fieldName}
				defaultValue={defaultValue}
				render={({ field: { value } }) => <TextInput value={value as string} />}
			/>
		</View>
	);
}

export default ControlledLocalTextInput;
