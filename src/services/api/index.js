import Unsplash, { toJson } from 'unsplash-js/native';

/**
 * ? Local Imports
 */
import { UNSPLASH_APP_ID, UNSPLASH_SECRET } from 'services/api/Api.constant';

const unsplash = new Unsplash({
  accessKey: UNSPLASH_APP_ID,
  secret: UNSPLASH_SECRET,
});

/**
 * ? Users of an api fetch usage
 */
export const fetchUsers = (param) => {
  const result = new Promise(async (resolve, reject) => {
    try {
      unsplash.search
        .users(param)
        .then(toJson)
        .then((json) => {
          resolve(json);
        });
    } catch (error) {
      console.log('fetchUsers Error: ', error);
      reject(err);
    }
  });
  return result;
};
