import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated } from 'react-native';

import style from './style/errorWrapper';
import { globalScreenStyle } from '/const/styles';
import { useAppDispatch } from '/hooks/useAppDispatch';
import { useAppSelector } from '/hooks/useAppSelector';
import { translations } from '/i18n/translationHelper';
import LocalText from '/modules/shared/components/LocalText';
import { setError } from '/reduxStore/error/errorRedux';

function ErrorWrapper() {
	const hasError = useAppSelector((state) => state.error.error);
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeAnimation = (value: number) => {
		Animated.timing(fadeAnim, {
			toValue: value,
			duration: 2000,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (hasError) {
			fadeAnimation(1);
			setTimeout(() => {
				fadeAnimation(0);
				setTimeout(() => {
					dispatch(setError(false));
				}, 2000);
			}, 2000);
		}
	}, [hasError]);

	return (
		<Animated.View style={[style.container, globalScreenStyle.centerColumn, { opacity: fadeAnim }]}>
			<LocalText textStyle={style.text}>{t(translations.global_error.title)}</LocalText>
		</Animated.View>
	);
}

export default ErrorWrapper;
