import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth.jsx";
import Instruction from "./Instruction.jsx";
import CreateMeetup from "./CreateMeetup";
import "./Styles/App.module.scss";
import EditMeetup from "./EditMeetup";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions/user";
import MeetupList from "./components/Meetups/MeetupList";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <Router>
      {!isAuth && (
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route exact path="/about" element={<Instruction />} />
        </Routes>
      )}
      {isAuth && (
        <Routes>
          <Route exact path="/" element={<CreateMeetup />} />
          <Route exact path="/meetups" element={<MeetupList />} />
          <Route exact path="/edit" element={<EditMeetup />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
