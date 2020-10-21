import Cookies from 'js-cookie';
import faker from 'faker';

const getUserName = () => {
  const currentUsername = Cookies.get('username');
  if (currentUsername) {
    return currentUsername;
  }

  const newUsername = faker.internet.userName();
  Cookies.set('username', newUsername);
  return newUsername;
};

export default getUserName;
