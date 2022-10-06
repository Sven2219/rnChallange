import React from 'react';
import { Text, TextStyle } from 'react-native';
import { getTextSizeStyle } from '../helpers/text';

export type TextSize = 'tiny' | 'small' | 'medium';

export interface LocalTextProps {
	children?: string | undefined | JSX.Element;
	textSize?: TextSize;
	testID?: string;
	textStyle?: TextStyle | TextStyle[];
}

function LocalText({ children, textStyle, textSize = 'medium', testID }: LocalTextProps) {
	const textSizeStyle = React.useMemo(() => getTextSizeStyle(textSize), [textSize]);

	return (
		<Text testID={testID} style={[textSizeStyle, textStyle]}>
			{children}
		</Text>
	);
}

export default LocalText;
