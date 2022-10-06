import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import { userKeys } from './keys';
import service from '/service/service';
import { Post } from '/types/Posts';

export function useGetPosts(
	userId: number,
	options?: Omit<UseQueryOptions<Post[], AxiosError, Post[], readonly ['user.posts']>, 'queryKey' | 'queryFn'>
) {
	return useQuery(userKeys.getUserPosts, () => service.users.getPosts(userId), {
		...options,
		retry: 0,
		refetchOnWindowFocus: false,
	});
}
