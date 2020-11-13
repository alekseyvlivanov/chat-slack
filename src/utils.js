import Cookies from 'js-cookie';
import faker from 'faker';

const changeFavicon = (src) => {
  const link = document.createElement('link');
  const oldLink = document.getElementById('dynamic-favicon');

  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;

  if (oldLink) {
    document.head.removeChild(oldLink);
  }

  document.head.appendChild(link);
};

const setFakeUserName = () => {
  const currentUserName = Cookies.get('username');
  if (currentUserName) {
    return currentUserName;
  }

  const newUserName = faker.internet.userName();
  Cookies.set('username', newUserName);
  return newUserName;
};

export { changeFavicon, setFakeUserName };
