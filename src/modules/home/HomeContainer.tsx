import React from 'react';

import HomeScreen from './HomeScreen';
import { useLocalNavigation } from '/hooks/useLocalNavigation';
import { Routes } from '/navigation/routes';

function HomeContainer() {
	const { navigation } = useLocalNavigation<Routes.Home>();

	return <HomeScreen goBack={() => navigation.goBack()} />;
}

export default HomeContainer;
