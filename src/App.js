import React, { Component } from 'react';
import Login from './auth/login';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import { ErrorBoundary } from 'react-error-boundary';
import { createContext } from 'react';
import Home from './home';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const Role = {
  SCHOOL: 'SCHOOL',
  PRAKTICA: 'PRAKTICA',
};

const MOCK_USERS = [
  {
    id: 1,
    email: 'user1@school1.com',
    password: 'password',
    role: Role.SCHOOL,
  },
  {
    id: 2,
    email: 'user1@school2.com',
    password: 'password',
    role: Role.PRAKTICA,
  },
];

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

function App() {
  const [user, setUser] = useState(null);

  const login = (user) => {
    const foundUser = MOCK_USERS.find(
      (u) => u.email === user.email && u.password === user.password
    );
    if (foundUser) {
      setUser(foundUser);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const userRole = user?.role;

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthContext.Provider value={{ user, login, logout }}>
          <AppNavbar />
          <Routes>
            <Route path='/' element={<PrivateRoute component={Home} />} />
            <Route
              path='/auth/login'
              element={<NonAuthenticatedRoute component={Login} />}
            />
          </Routes>
        </AuthContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const auth = useAuth();
  const isAuthenticated = !!auth.user;
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to='/auth/login' replace />
  );
};

const NonAuthenticatedRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  const isAuthenticated = !!auth.user;
  return isAuthenticated ? (
    <Navigate to='/' replace />
  ) : (
    <Component {...rest} />
  );
};

export default App;
