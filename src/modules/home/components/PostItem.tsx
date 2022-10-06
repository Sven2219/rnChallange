import React from 'react';
import { Card } from '@rneui/base';

import LocalText from '/modules/shared/components/LocalText';
import { Post } from '/types/Posts';
import style from '../style/post';

interface Props {
	post: Post;
}

function PostItem({ post }: Props) {
	return (
		<Card>
			<Card.Title>{post.title}</Card.Title>
			<Card.Divider />
			<LocalText textSize="small" textStyle={style.body}>
				{post.body}
			</LocalText>
		</Card>
	);
}

export default React.memo(PostItem, (curr, next) => curr.post.id === next.post.id);
