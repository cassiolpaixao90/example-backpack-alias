import UserRepository from '~/repositories';

class UserService {
  getAll() {
    return UserRepository.getAll();
  }
}

export default new UserService();
