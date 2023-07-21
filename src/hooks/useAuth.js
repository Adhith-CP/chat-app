import { useState } from "react";

const useAuth = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  const saveCredentials = (username, password) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  const clearCredentials = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    saveCredentials,
    clearCredentials,
  };
};

export default useAuth;
