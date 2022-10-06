import React from 'react';
import { render } from '@testing-library/react-native';

import { registerFormDefaultValues } from '/modules/register/form/register';
import HomeScreen from '/modules/home/HomeScreen';
import { Post } from '/types/Posts';
import testIds from '/const/testIds';

interface Props {
	posts: Post[];
}

function HomeScreenTest({ posts }: Props) {
	return <HomeScreen posts={posts} />;
}

test('Should display empty state', () => {
	const POSTS: Post[] = [];
	const { getByTestId } = render(<HomeScreenTest posts={POSTS} />);
	const emptyState = getByTestId(testIds.postsEmptyState);
	expect(emptyState);
});

test('Should display post', () => {
	const POSTS: Post[] = [{ body: '', id: 0, title: '', user_id: 0 }];
	const { getByTestId } = render(<HomeScreenTest posts={POSTS} />);
	const postsFlatList = getByTestId(testIds.postList);
	expect(postsFlatList).not.toBeNull();
});
