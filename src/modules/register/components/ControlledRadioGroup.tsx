import React from 'react';
import { View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';

import style from '../style/controlledRadioGroup';
import RadioButton from './RadioButton';
import { GenderType, StatusType } from '/types/User';

interface Props {
	fieldName: string;
	buttons: (GenderType | StatusType)[];
	testID?: string;
}

function ControlledRadioGroup({ fieldName, buttons, testID }: Props) {
	const { control, setValue } = useFormContext();

	return (
		<View style={style.radioGroup} testID={testID}>
			<Controller
				name={fieldName}
				control={control}
				defaultValue={buttons[0]}
				render={({ field: { value } }) => (
					<>
						{buttons.map((el) => (
							<RadioButton
								key={el}
								item={el}
								isActive={el === value}
								onPress={() => setValue(fieldName, el)}
							/>
						))}
					</>
				)}
			/>
		</View>
	);
}

export default ControlledRadioGroup;
