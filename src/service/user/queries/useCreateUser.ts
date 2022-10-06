import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { userKeys } from './keys';
import { RegisterFormType } from '/modules/register/form/register';
import { setError } from '/redux/error/errorRedux';
import store from '/redux/store';
import { setUser } from '/redux/user/userRedux';
import service from '/service/service';
import { User } from '/types/User';

export function useCreateUser(
	options?: Omit<UseMutationOptions<User, AxiosError, RegisterFormType>, 'mutationKey' | 'mutationFn'>
) {
	return useMutation<User, AxiosError, RegisterFormType>(
		userKeys.createUser,
		(userData) => service.users.createUser(userData),
		{
			...options,
			onSuccess: async (data, variables, context) => {
				if (options?.onSuccess) {
					await options.onSuccess(data, variables, context);
				}
				store.dispatch(setUser(data));
			},
			onError: () => {
				store.dispatch(setError(true));
			},
		}
	);
}
