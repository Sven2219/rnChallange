import { TextStyle } from 'react-native';

import { TextSize } from '../components/LocalText';
import { globalStyles } from '/const/styles';

export function getTextSizeStyle(textSize: TextSize): TextStyle {
	if (textSize === 'tiny') {
		return globalStyles.tinyText;
	}
	if (textSize === 'small') {
		return globalStyles.smallText;
	}
	if (textSize === 'medium') {
		return globalStyles.mediumText;
	}
	return globalStyles.largeText;
}
