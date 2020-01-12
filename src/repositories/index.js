class UserRepository {
  getAll() {
    return [{ _id: 1, name: 'user 1' }];
  }
}

export default new UserRepository();
