import React from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../../assets/img/user-icon.svg";
import settings_icon from "../../assets/img/settings_icon.svg";
import logout_icon from "../../assets/img/logout_icon.svg";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

function HeaderControls(props) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles["header-controls"]}>
      {!isAuth && (
        <img
          className={styles["header-controls__item"]}
          src={user_icon}
          alt="user"
          onClick={() => navigate("/")}
        />
      )}
      {isAuth && (
        <img
          className={styles["header-controls__item"]}
          src={settings_icon}
          alt="settimgs"
        />
      )}
      {isAuth && (
        <img
          className={styles["header-controls__item"]}
          src={logout_icon}
          alt="logout"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        />
      )}
    </div>
  );
}

export default HeaderControls;
