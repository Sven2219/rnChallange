import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Input } from '@rneui/base';
import { Controller, useFormContext } from 'react-hook-form';

import { RulesInterface } from '/const/rules';

interface Props {
	fieldName: string;
	inputProps?: TextInputProps;
	rules?: Partial<RulesInterface>;
}

function ControlledLocalTextInput({ fieldName, inputProps, rules }: Props) {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<View>
			<Controller
				control={control}
				name={fieldName}
				rules={rules}
				render={({ field: { value, onChange } }) => (
					<Input
						{...inputProps}
						value={value as string}
						errorMessage={errors[fieldName]?.message as string}
						onChangeText={onChange}
					/>
				)}
			/>
		</View>
	);
}

export default ControlledLocalTextInput;
