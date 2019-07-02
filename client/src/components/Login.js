import React, {useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor='title'>Username:</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='Admin'
        required
      />
      <label htmlFor='url'>Password:</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Admin'
        required
      />
    </form>
  );
};

export default Login;
