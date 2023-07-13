import React, { useState } from 'react';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an API request to fetch user credentials
      const response = await fetch('https://myworklm.com/afrowatch/api/afrowatch_api_admin.php');
      const data = await response.json();

      // Check if the username and password match any of the fetched objects
      const match = data.some((user) => {
        return user.admin_mail === username && user.admin_password === password;
      });

      if (match) {
        console.log('Username:', username);
        console.log('Password:', password);
        props.logged(true);
      } else {
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching user credentials:', error);
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
};

export default Login;
