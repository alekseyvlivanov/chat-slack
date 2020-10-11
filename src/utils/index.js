import Cookies from 'js-cookie';
import faker from 'faker';
import { createContext } from 'react';

export const getUserName = () => {
  const currentUsername = Cookies.get('username');
  if (currentUsername) {
    return currentUsername;
  }

  const newUsername = faker.internet.userName();
  Cookies.set('username', newUsername);
  return newUsername;
};

export const UserContext = createContext(getUserName());
