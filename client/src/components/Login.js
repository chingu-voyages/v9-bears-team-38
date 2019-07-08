import React, {useState, useEffect, useContext} from 'react';

import {VideoContext} from './VideoStore.js';

const Login = ({showLogin}) => {
  const {state, dispatch} = useContext(VideoContext);

  const [username, setUsername] = useState('ChinguAdmin');
  const [pass, setPass] = useState('ChinguCohortCollective');

  const handleLoginUser = e => {
    e.preventDefault();
    let user = [username, pass];
    dispatch({
      type: 'verifyUser',
      payload: user,
    });
  };

  const handleLogoutUser = e => {
    e.preventDefault();
    dispatch({
      type: 'clearUser',
    });
  };

  return (
    <div>
      {!!state.user ? (
        <button id='submit-logout' onClick={handleLogoutUser}>
          Logout
        </button>
      ) : (
        <form
          id='login-form'
          className={!!showLogin ? 'fbc show-login' : 'fbc hide-login'}
          onSubmit={handleLoginUser}>
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
