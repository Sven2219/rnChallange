import { StyleSheet } from 'react-native';
import { colors } from '/const/colors';

const style = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 40,
		left: '10%',
		width: '80%',
		borderRadius: 10,
		height: 40,
		backgroundColor: colors.fireBrick,
		zIndex: 100,
		opacity: 0,
	},
	text: {
		color: colors.white,
	},
});

export default style;
