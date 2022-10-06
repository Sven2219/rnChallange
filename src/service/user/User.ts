import { User } from '/types/User';

interface UsersService {
	createUser(data: User): Promise<User>;
}

export default UsersService;
