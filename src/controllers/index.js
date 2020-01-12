import UserService from '~/services';

class User {
  getAll() {
    return UserService.getAll();
  }
}
export default new User();
