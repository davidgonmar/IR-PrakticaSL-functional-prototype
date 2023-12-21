import React, { Component, useEffect } from 'react';
import Login from './auth/login';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import { ErrorBoundary } from 'react-error-boundary';
import { createContext } from 'react';
import Home from './home';
import Logout from './auth/logout';
import Projects from './school/projects';
import ProjectDetails from './school/projects/details';
import { SchoolList } from './praktica/views/SchoolList';
import { usePersistedState } from './common/usePersistedState';
import { CreateSchool } from './praktica/views/CreateSchool';
import Incoming from './praktica/incoming/incoming';
import Outgoing from './praktica/outgoing/outgoing';
import { CreateProject } from './praktica/project/CreateProject';
import { Partners } from './praktica/partners/partners';
import { CreatePartner } from './praktica/partners/AddPartner';
import { EditSchool } from './praktica/views/EditSchool';
import { EditPartner } from './praktica/partners/EditPartner';
import { EditProject } from './praktica/project/EditProject';
import { Participants } from './school/participants/participants';
import { Participant } from './school/participants/Participant';
import { EditParticipant } from './school/participants/EditParticipant';

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
  login: () => { },
  logout: () => { },
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
    email: 'user1@praktica.com',
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
  useEffect(() => {
    document.title = 'Praktica Training & Consulting';
  }, []);

  const [user, setUser] = usePersistedState('user_info', null);

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
            <Route
              path='/logout'
              element={<PrivateRoute component={Logout} />}
            />
            <Route
              path='/school/projects'
              element={<PrivateRoute component={Projects} />}
            />
            <Route
              path='/school/projects/project'
              element={<PrivateRoute component={ProjectDetails} />}
            />
            <Route
              path='/school/projects/details'
              element={<PrivateRoute component={ProjectDetails} />}
            />
            <Route
              path='/praktica/schools'
              element={<PrivateRoute component={SchoolList} />}
            />
            <Route
              path='/praktica/projects'
              element={<PrivateRoute component={Projects} />}
            />
            <Route
              path='/praktica/outgoing'
              element={<PrivateRoute component={Outgoing} />}
            />
            <Route
              path='/praktica/incoming'
              element={<PrivateRoute component={Incoming} />}
            />

            <Route
              path='/praktica/partners'
              element={<PrivateRoute component={Partners} />}
            />

            <Route
              path='/praktica/schools/create'
              element={<PrivateRoute component={CreateSchool} />}
            />

            <Route
              path='/praktica/partners/add'
              element={<PrivateRoute component={CreatePartner} />}
            />

            <Route
              path='/praktica/projects/create'
              element={<PrivateRoute component={CreateProject} />}
            />

            <Route
              path='/praktica/incoming/project'
              element={<PrivateRoute component={ProjectDetails} />}
            />

            <Route
              path='/praktica/outgoing/project'
              element={<PrivateRoute component={ProjectDetails} />}
            />

            <Route
              path='/praktica/incoming/project/edit'
              element={<PrivateRoute component={EditProject} />}
            />

            <Route
              path='/praktica/outgoing/project/edit'
              element={<PrivateRoute component={EditProject} />}
            />

            <Route
              path='/praktica/partners/edit'
              element={<PrivateRoute component={EditPartner} />}
            />

            <Route
              path='/praktica/schools/edit'
              element={<PrivateRoute component={EditSchool} />}
            />

            <Route
              path='/school/projects/project/edit'
              element={<PrivateRoute component={EditProject} />}
            />
            <Route
              path='/praktica/projects/project/edit'
              element={<PrivateRoute component={EditProject} />}
            />

            <Route
              path='/participants'
              element={<PrivateRoute component={Participants} />}
            />
            <Route
              path='/participants/participant'
              element={<PrivateRoute component={Participant} />}
            />
            <Route
              path='/participants/edit'
              element={<PrivateRoute component={EditParticipant} />}
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
