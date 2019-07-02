import React, {useState, useEffect} from 'react';

const Login = ({showLogin}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //On app mount: if user stored in local log them in
    const getUserFromLocalStorage = localStorage.getItem('username');
    if (!!getUserFromLocalStorage) {
      setUser(getUserFromLocalStorage);
    }
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginUser = e => {
    e.preventDefault();
    let postBody = {
      user: username,
      pass: password,
    };
    if (!user) {
      fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => {
          let user = response.data.name;
          localStorage.setItem('username', user);
          setUser(user);
        })
        .catch(error => {
          console.warn(error);
          alert(error);
        });
    } else {
      alert('User Already Logged In');
    }
  };

  return (
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
