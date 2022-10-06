import { Post } from '/types/Posts';
import { User } from '/types/User';

interface UsersService {
	createUser(data: User): Promise<User>;
	getPosts(userId: number): Promise<Post[]>;
}

export default UsersService;
