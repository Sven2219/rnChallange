import { services } from '../serviceHelper';
import UserApi from './api/UserApi';

const usersService = new UserApi(services);

export default usersService;
