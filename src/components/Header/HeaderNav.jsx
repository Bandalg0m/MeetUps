import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

const HeaderNav = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <>
      {isAuth && (
        <nav className={styles.nav}>
          <Link to="/meetups" className={styles["nav__item"]}>
            Все митапы
          </Link>
          <Link to="/edit" className={styles["nav__item"]}>
            Мои митапы
          </Link>
          <Link to="/" className={styles["nav__item"]}>
            Пользователи
          </Link>
        </nav>
      )}
    </>
  );
};

export default HeaderNav;
