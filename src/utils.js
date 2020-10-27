import Cookies from 'js-cookie';
import faker from 'faker';

const setFakeUserName = () => {
  const currentUserName = Cookies.get('username');
  if (currentUserName) {
    return currentUserName;
  }

  const newUserName = faker.internet.userName();
  Cookies.set('username', newUserName);
  return newUserName;
};

export default setFakeUserName;
