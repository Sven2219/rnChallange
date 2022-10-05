import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/core';

import { RouterParamList, Routes } from '/navigation/routes';

export function useLocalNavigation<T extends Routes>() {
	const navigation = useNavigation<NavigationProp<RouterParamList, T>>();

	const route = useRoute<RouteProp<RouterParamList, T>>();

	return { route, navigation };
}
