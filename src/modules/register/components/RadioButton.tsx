import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import style from '../style/radioButton';
import { globalScreenStyle } from '/const/styles';
import { translations } from '/i18n/translationHelper';
import LocalText from '/modules/shared/components/LocalText';
import { GenderType, StatusType } from '/types/User';

interface Props {
	item: GenderType | StatusType;
	isActive: boolean;
	onPress: () => void;
}

function RadioButton({ item, isActive, onPress }: Props) {
	const { t } = useTranslation();
	return (
		<View style={globalScreenStyle.centerColumn}>
			<TouchableOpacity onPress={onPress} testID={item}>
				<LocalText
					textSize="medium"
					testID={`${item}-text`}
					textStyle={{ ...(isActive ? style.active : style.inactive) }}>
					{t(translations.radio_group[item])}
				</LocalText>
			</TouchableOpacity>
		</View>
	);
}

export default RadioButton;
