/* eslint-disable react/no-unused-prop-types */
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalScreenStyle } from '/const/styles';
import { translations } from '/i18n/translationHelper';
import { Post } from '/types/Posts';
import LocalText from '../shared/components/LocalText';
import PostItem from './components/PostItem';
import IF from '../shared/components/IfStatement';

interface Props {
	posts?: Post[];
}

function HomeScreen({ posts }: Props) {
	const { t } = useTranslation();
	const renderItem = useCallback(({ item }: { item: Post }) => <PostItem post={item} />, []);
	const keyExtractor = useCallback((item: Post) => `${item.id}-${item.user_id}`, []);

	return (
		<SafeAreaView style={globalScreenStyle.container}>
			<LocalText textStyle={globalScreenStyle.title} textSize="large">
				{t(translations.home_screen.title)}
			</LocalText>
			<IF statement={!posts || posts.length === 0}>
				<View style={[globalScreenStyle.container, globalScreenStyle.centerColumn]}>
					<LocalText>{t(translations.home_screen.empty_state)}</LocalText>
				</View>
			</IF>
			<IF statement={!!posts && posts?.length > 0}>
				<FlatList
					data={posts}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					bounces={false}
					showsVerticalScrollIndicator={false}
				/>
			</IF>
		</SafeAreaView>
	);
}

export default HomeScreen;
