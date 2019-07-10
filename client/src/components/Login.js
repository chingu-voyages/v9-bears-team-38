import React, {useState, useEffect, useContext} from 'react';

import {VideoContext} from './VideoStore.js';

const Login = ({showLogin, handleShowLogin}) => {
  const {state, dispatch} = useContext(VideoContext);

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleLoginUser = e => {
    e.preventDefault();
    handleShowLogin();
    let user = [username, pass];
    dispatch({
      type: 'verifyUser',
      payload: user,
    });
  };

  const handleLogoutUser = e => {
    e.preventDefault();
    handleShowLogin();
    dispatch({
      type: 'clearUser',
    });
  };

  return (
    <div
      id='login-modal'
      className={!!showLogin ? 'fbc show-login' : 'fbc hide-login'}>
      <button id='close-login' onClick={handleShowLogin}>
        close
      </button>
      {!!state.user ? (
        <button id='submit-logout' onClick={handleLogoutUser}>
          Logout
        </button>
      ) : (
        <form id='login-form' className='fbc' onSubmit={handleLoginUser}>
          <div>
            <label htmlFor='title'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder='Admin'
              required
            />
          </div>
          <div>
            <label htmlFor='url'>Password:</label>
            <input
              type='password'
              id='password'
              value={pass}
              onChange={e => setPass(e.target.value)}
              placeholder='Admin'
              required
            />
          </div>
          <button id='submit-login'>Log In</button>
        </form>
      )}
    </div>
  );
};

export default Login;
