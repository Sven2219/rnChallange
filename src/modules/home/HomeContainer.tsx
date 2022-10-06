import React from 'react';
import LoadingIndicator from './components/LoadingIndicator';

import HomeScreen from './HomeScreen';
import { useAppSelector } from '/hooks/useAppSelector';
import { useGetPosts } from '/service/user/queries/useGetPosts';

function HomeContainer() {
	const user = useAppSelector((state) => state.user.user);
	const { data, isLoading } = useGetPosts(user?.id ?? 0, { enabled: !!user?.id });

	if (isLoading) {
		return <LoadingIndicator />;
	}
	return <HomeScreen posts={data} />;
}

export default HomeContainer;
