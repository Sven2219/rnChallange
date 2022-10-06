import UsersService from '../User';
import { RegisterFormType } from '/modules/register/form/register';
import { AxiosRequestType } from '/service/ServiceClient';
import { ServiceInstances } from '/service/serviceHelper';
import { User } from '/types/User';

class UserApi implements UsersService {
	constructor(private clientInstances: ServiceInstances) {}

	async createUser(data: RegisterFormType): Promise<User> {
		const response = await this.clientInstances.users.call(AxiosRequestType.POST, '', { ...data });
		return response.data as User;
	}
}

export default UserApi;
