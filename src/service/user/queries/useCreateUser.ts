import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { userKeys } from './keys';
import store from '/redux/store';
import { setUser } from '/redux/user/userRedux';
import service from '/service/service';
import { User } from '/types/User';

export function useCreateUser(
	options?: Omit<UseMutationOptions<User, AxiosError, User>, 'mutationKey' | 'mutationFn'>
) {
	return useMutation<User, AxiosError, User>(userKeys.createUser, (userData) => service.users.createUser(userData), {
		...options,
		onSuccess: (data) => {
			store.dispatch(setUser(data));
		},
	});
}
