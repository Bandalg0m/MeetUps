import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Auth from './components/Auth/Auth.jsx'
import Instruction from './components/Instruction/Instruction.jsx'
import './App.module.scss'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Auth />}>
        </Route>
        <Route exact path='/about' element={<Instruction />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
