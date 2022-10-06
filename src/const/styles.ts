import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const TINY_TEXT_SIZE = { fontSize: 12, lineHeight: 16 };
export const SMALL_TEXT_SIZE = { fontSize: 14, lineHeight: 20 };
export const MEDIUM_TEXT_SIZE = { fontSize: 16, lineHeight: 24 };
export const LARGE_TEXT_SIZE = { fontSize: 24, lineHeight: 34 };

const SCREEN_PADDING = 16;

export const globalScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		padding: SCREEN_PADDING,
	},
	centerRow: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	centerColumn: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const globalStyles = StyleSheet.create({
	textColor: {
		color: colors.black,
	},
	tinyText: {
		...TINY_TEXT_SIZE,
	},
	smallText: {
		...SMALL_TEXT_SIZE,
	},
	mediumText: {
		...MEDIUM_TEXT_SIZE,
	},
	largeText: {
		...LARGE_TEXT_SIZE,
	},
});
