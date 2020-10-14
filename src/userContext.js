import { createContext } from 'react';
import Cookies from 'js-cookie';
import faker from 'faker';

export const getUserName = () => {
  const currentUsername = Cookies.get('username');
  if (currentUsername) {
    return currentUsername;
  }

  const newUsername = faker.internet.userName();
  Cookies.set('username', newUsername);
  return newUsername;
};

const UserContext = createContext(getUserName());

export default UserContext;
