/* eslint-disable import/prefer-default-export */
export const getAuth = () => {
  let results = '';

  try {
    const authData = localStorage.getItem('__token__');

    if (authData) {
      results = JSON.stringify(authData);
      return {
        state: true,
        token: results
      };
    }
    return {
      state: false,
      token: ''
    };
  } catch (error) {
    return {
      state: false,
      token: ''
    };
  }
};
