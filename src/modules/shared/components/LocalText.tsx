import React from 'react';
import { Text, TextStyle } from 'react-native';

import { getTextSizeStyle } from '../helpers/text';
import { globalStyles } from '/const/styles';

export type TextSize = 'tiny' | 'small' | 'medium' | 'large';

export interface LocalTextProps {
	children?: string | undefined | JSX.Element;
	textSize?: TextSize;
	testID?: string;
	textStyle?: TextStyle | TextStyle[];
}

function LocalText({ children, textStyle, textSize = 'medium', testID }: LocalTextProps) {
	const textSizeStyle = React.useMemo(() => getTextSizeStyle(textSize), [textSize]);

	return (
		<Text testID={testID} style={[globalStyles.textColor, textSizeStyle, textStyle]}>
			{children}
		</Text>
	);
}

export default LocalText;
