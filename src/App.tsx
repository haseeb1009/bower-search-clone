import React from 'react';

import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import SideNav from './components/SideNav';
import About from './pages/About';
import PackagesList from './pages/Home';

const { Header, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Header className="header">
        <img src="app-logo.png" width={120} height={75} alt="logo" />
        <h1>Bower Search Clone</h1>
      </Header>
      <div className="layout">
        <SideNav />
        <Routes>
          <Route path="/" Component={PackagesList} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
      <Footer className="footer">
        Muhammad Haseeb &copy; {new Date().getFullYear()} bower.io clone
      </Footer>
    </Router>
  );
};

export default App;
