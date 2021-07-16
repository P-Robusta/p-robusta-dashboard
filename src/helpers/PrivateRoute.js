// /* eslint-disable import/no-unresolved */
// /* eslint-disable react/prop-types */
// import React, { useEffect } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // useEffect(() => {
// //   /**
// //    * Check the authentication for the user
// //    */
// //   const auth = getAuth();
// //   console.log(auth);
// //   if (auth.state) {
// //     isLogin = true;
// //     console.log(isLogin);
// //   }
// // }, []);
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (
//       isLogin
//         ? <Component {...props} />
//         : <Redirect to="/login" />
//     )}
//   />
// );

// export default PrivateRoute;
