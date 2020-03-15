import React, { useContext, createContext, useState } from 'react';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [tokenExpiration, setTokenExpiration] = useState(null)
  const [username, setUsername] = useState(null)

  const login = (reqBody) => {
    const url = '/graphql'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
          return res.json()
      })
      .then(response => {
        console.log("response", response)
        if (response.data.login) {
          setToken(response.data.login.token)
          setUserId(response.data.login.userId)
          setTokenExpiration(response.data.login.tokenExpiration)
          setUsername(response.data.login.name)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const logout = () => {
    setToken(null)
    setUserId(null)
    setTokenExpiration(null)
    setUsername(null)
  }

  return <AuthContext.Provider value={{
    tokenExpiration,
    setTokenExpiration,
    userId,
    setUserId,
    token,
    setToken,
    login,
    logout,
    username
  }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)