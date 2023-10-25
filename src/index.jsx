import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/header';
import UsersSelect from './pages/Users';
// import Error from './components/Error/error';
import Login from './components/UserButton/UserButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<UsersSelect />} />
        <Route path="/user/:userId" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
