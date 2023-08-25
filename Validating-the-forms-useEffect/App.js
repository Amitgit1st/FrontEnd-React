import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Store/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStoragevalue = localStorage.getItem('isLoggedin')
    if (localStoragevalue === '1') {
      setIsLoggedIn(true)
    }

  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedin', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (

    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout : logoutHandler
      }}>
      {/* <MainHeader onLogout={logoutHandler} /> */}
      
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>

  );
}

export default App;
