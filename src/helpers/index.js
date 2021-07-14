/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
export const getAuth = () => {
  let results = '';
  try {
    const authData = localStorage.getItem('__token__');
    const isSession = sessionStorage.getItem('__token__');
    if (authData) {
      sessionStorage.setItem('__token__', results);
      results = JSON.stringify(sessionStorage.getItem('__token__'));
      return {
        state: true,
        token: results
      };
    } else
    if (isSession) {
      results = JSON.stringify(isSession);
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
