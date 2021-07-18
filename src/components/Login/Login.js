/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */

import './style.css';
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postLogin, callLogin } from 'API/callAPI';
import { Redirect, useHistory } from 'react-router-dom';
import { getAuth } from 'helpers';
import React, { useEffect } from 'react';

function Login(props) {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm();

  const history = useHistory();

  let errLogin = false;

  useEffect(() => {
    // if(sessionStorage.getItem())
    sessionStorage.removeItem('__token__');
  }, []);

  const onSubmitLogin = (data) => {
    const check = document.getElementById('save_login');
    const body = {
      email: data.email,
      password: data.password
    };
    if (check.checked) {
      callLogin(body, true).then(() => {
        history.replace('/admin');
        window.location.reload();
        // <Redirect to="/admin" />
      // window.location.assign('/admin');
      }).catch(() => { errLogin = true; });
    } else {
      callLogin(body, false).then(() => {
        history.replace('/admin');
        window.location.reload();
        // <Redirect to="/admin" />
        // window.location.assign('/admin');
        // history.replace('/admin');
      }).catch(() => { console.log('Thất bại'); errLogin = true; });
    }
  };
  return (
    <div>
      <div className="body-login">
        <div className="outer-login">
          <div className="inner-login">
            <form method="POST" onSubmit={handleSubmit(onSubmitLogin)}>
              <div className="logo-img-login">
                <img
                  src="https://www.passerellesnumeriques.org/misc/logo-en.png"
                  alt="PNV-"
                />
              </div>
              <h3>Log in</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <strong>
                    <span className="text-danger">This field must be email</span>
                  </strong>
                )}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <strong>
                    <span className="text-danger">This field cannot be left blank</span>
                  </strong>
                )}
              </div>

              <div className="form-group">
                <input type="checkbox" id="save_login" />
                &nbsp;
                <label htmlFor="save_login"> Save login? </label>
              </div>
              <button type="submit" className="btn btn-login btn-lg btn-block">Sign in</button>
              <br />
              {errLogin ? <div className="alert alert-danger" role="alert">Login failed: Check your account and password</div> : <div> </div>}
            </form>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
