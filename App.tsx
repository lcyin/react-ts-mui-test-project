import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HRouteInfome from './components/RouteInfo';

import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routeInfo" element={<RouteInfo />} />
      </Routes>
    </Router>
  );
}
