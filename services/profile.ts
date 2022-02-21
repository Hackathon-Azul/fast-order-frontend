import api from './api';
import User from '../dtos/User';

const ProfileService = {
  update(user: User) {
    return api.put<void>('/auth/v1/users', user);
  }
}

export default ProfileService;