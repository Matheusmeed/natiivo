import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
