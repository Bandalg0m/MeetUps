import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import layout from "../../Styles/Layout.module.scss";
import Meetups from "./Meetup";
import myAxios from "../../Utils/myAxios";
const MeetupList = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    myAxios.get("/meetup").then((res) => {
      setMeetups(res.data);
    });
  }, []);
  return (
    <div className={layout.wrapper}>
      <div className={layout.container}>
        <Header />
        {meetups.map((meetup) => (
          <Meetups meetup={meetup} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default MeetupList;
