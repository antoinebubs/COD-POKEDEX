import React, {useState} from 'react';

const AuthContext = React.createContext({
  token: null,
});

function useAuthProvider() {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
  
    function updateToken(newToken) {
      localStorage.setItem('token', newToken);
      setToken(newToken);
    }

    function logout() {
        localStorage.removeItem('token');
        setToken(null);
    }
  
    return {
        token,
        updateToken,
        logout
    };
}

export const AuthProvider = ({children}) => {
  const context = useAuthProvider();
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);