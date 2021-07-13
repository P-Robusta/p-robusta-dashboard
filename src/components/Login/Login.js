/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */

import './style.css';
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postLogin } from 'API/callAPI';
// import React, { useState } from 'react';
function Login() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm();
  // Xử lí đăng nhập
  const onSubmitLogin = (data) => {
    const check = document.getElementById('save_login');
    // const email = data.txtEmail;
    // const password = data.txtPasword;
    console.log(data.password);
    const body = {
      email: data.email,
      password: data.password
    };
    // if (check.checked) postLogin(email, password, true);
    // else postLogin(email, password, false);
    if (check.checked) postLogin(body, true);
    else postLogin(body, false);
  };
  // const onSubmitLogin = (data) => (console.log(data));

  return (
    <div>
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
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
