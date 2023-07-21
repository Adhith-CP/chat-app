import React, { useState } from 'react';
import axios from 'axios';

const projectID = '868efb3d-a71e-47b3-86bf-ca5060b66a32';

const LoginForm = ({ setUserLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      setUserLoggedIn(true);
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setUserLoggedIn(false);
  };

  const isUserLoggedIn = !!localStorage.getItem('username');

  return (
    <div className="wrapper">
      {isUserLoggedIn ? (
        <div>
          <h1>Welcome, {localStorage.getItem('username')}!</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          {error && <h1 className="error">{error}</h1>}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
