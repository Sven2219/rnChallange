import { StyleSheet } from 'react-native';

export const TINY_TEXT_SIZE = { fontSize: 12, lineHeight: 16 };
export const SMALL_TEXT_SIZE = { fontSize: 14, lineHeight: 20 };
export const MEDIUM_TEXT_SIZE = { fontSize: 16, lineHeight: 24 };

const globalStyles = StyleSheet.create({
	tinyText: {
		...TINY_TEXT_SIZE,
	},
	smallText: {
		...SMALL_TEXT_SIZE,
	},
	mediumText: {
		...MEDIUM_TEXT_SIZE,
	},
});

export default globalStyles;
