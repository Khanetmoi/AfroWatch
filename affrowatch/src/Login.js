import React, { useState } from 'react';

const Login = (props) => {
//   const [logged, setLogged] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using username and password
    if(username === 'Van' && password === '1234'){
        console.log('Username:', username);
        console.log('Password:', password);
        props.logged(true)
    }
    
    // Reset the form
    setUsername('');
    setPassword('');
  };
    return ( 
        <div className="login-page">
            <h2>Login Page</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
        </div>
     );
}
 
export default Login;