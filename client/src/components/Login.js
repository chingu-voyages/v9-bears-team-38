import React, {useState} from 'react';

const Login = ({showLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      id='login-form'
      className={!!showLogin ? 'fbc show-login' : 'fbc hide-login'}>
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
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Admin'
          required
        />
      </div>
      <button id='submit-login'>Log In</button>
    </form>
  );
};

export default Login;
