import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import Auth from './Auth.jsx'
import Instruction from './Instruction.jsx'
import CreateMeetup from "./CreateMeetup";
import './Styles/App.module.scss'
import EditMeetup from "./EditMeetup";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Auth/>}/>
                <Route exact path='/about' element={<Instruction/>}/>
                <Route exact path='/create' element={<CreateMeetup/>}/>
                <Route exact path='/edit' element={<EditMeetup/>}/>
            </Routes>
        </Router>
    )
}

export default App;
