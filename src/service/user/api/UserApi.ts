import UsersService from '../User';
import { AxiosRequestType } from '/service/ServiceClient';
import { ServiceInstances } from '/service/serviceHelper';

class UserApi implements UsersService {
	constructor(private clientInstances: ServiceInstances) {}

	async getUsersProfile(): Promise<void> {
		await this.clientInstances.user.call(AxiosRequestType.GET, 'test');
	}
}

export default UserApi;
