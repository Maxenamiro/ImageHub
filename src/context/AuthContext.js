import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const registerUser = (userData) => {
    // Here, you would handle the registration process and store the user data
    // For simplicity, we'll just set the user state to the provided userData
    setUser(userData);
  };

  const value = {
    user,
    registerUser,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
