import UsersService from '../User';
import { RegisterFormType } from '/modules/register/form/register';
import { AxiosRequestType } from '/service/ServiceClient';
import { ServiceInstances } from '/service/serviceHelper';
import { Post } from '/types/Posts';
import { User } from '/types/User';

class UserApi implements UsersService {
	constructor(private clientInstances: ServiceInstances) {}

	async createUser(data: RegisterFormType): Promise<User> {
		const response = await this.clientInstances.users.call(AxiosRequestType.POST, '', { ...data });
		return response.data as User;
	}

	async getPosts(userId: number): Promise<Post[]> {
		const response = await this.clientInstances.users.call(AxiosRequestType.GET, `/${userId}/posts`);
		return response.data as Post[];
	}
}

export default UserApi;
