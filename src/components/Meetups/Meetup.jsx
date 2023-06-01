import React from "react";
import style from "./Meetups.module.scss";
const Meetups = (props) => {
  return (
    <div className={style.wrap}>
      <div className={style.col}>
        <div className={style.title}>
          <div className={style.title}>{props.meetup.name}</div>
          <div className={style.subs}>
            {props.meetup.users.length} подписечник
          </div>
          --
        </div>
        <div className={style.description}>{props.meetup.description}</div>
        <div className={style.author}>{props.meetup.owner.fio}</div>
      </div>
      <div className={style.desc}>
        <div className={style.time}>{props.meetup.time}</div>
        <div className={style.location}>{props.meetup.location}</div>
      </div>
    </div>
  );
};

export default Meetups;
