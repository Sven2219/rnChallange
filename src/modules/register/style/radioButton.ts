import { StyleSheet } from 'react-native';
import { colors } from '/const/colors';

const style = StyleSheet.create({
	active: {
		borderRadius: 8,
		padding: 8,
		color: colors.darkGreen,
		textDecorationLine: 'underline',
	},
	inactive: {
		padding: 8,
		color: colors.dimGrey,
		textDecorationLine: 'line-through',
	},
});

export default style;
