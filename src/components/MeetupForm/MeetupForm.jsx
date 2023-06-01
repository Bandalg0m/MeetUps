import React from "react";
import style from "./MeetupForm.module.scss";
const MeetupForm = () => {
  return (
    <form className={style.form}>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Название:</div>
          <input
            type="text"
            className={style["form__input--short"]}
            placeholder={"React vs Angular"}
          />
        </label>
      </div>
      <div className={style["form__row--date"]}>
        <label className={style["form__block--date"]}>
          <div className={style["form__title"]}>Дата:</div>
          <input
            type="text"
            placeholder="1.11.2024"
            className={style["form__input--date"]}
          />
        </label>
        <label className={style["form__block--date"]}>
          <div className={style["form__title"]}>Время:</div>
          <input
            type="text"
            className={style["form__input--date"]}
            placeholder={"11:00"}
          />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Место:</div>
          <input
            type="text"
            className={style["form__input--short"]}
            placeholder={"Переговорная №1"}
          />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Краткое описание:</div>
          <textarea className={style["form__input--middle"]} />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Подробное описание:</div>
          <textarea className={style["form__input--wide"]} />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Целевая аудитория:</div>
          <textarea
            className={style["form__input--middle"]}
            placeholder={"Аналитики, тестировщики, зумеры..."}
          />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Что надо знать?</div>
          <textarea
            className={style["form__input--wide"]}
            placeholder={
              "1. любой функциональный язык программирования \n2. принципы строгой типизации \n3. третий закон Ньютона"
            }
          />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>Что будет?</div>
          <textarea
            className={style["form__input--wide"]}
            placeholder={"1. научу пить пиво \n2. расскажу про колбасу"}
          />
        </label>
      </div>
      <div className={style["form__row"]}>
        <label className={style["form__block"]}>
          <div className={style["form__title"]}>
            Почему надо обязательно придти?
          </div>
          <textarea
            className={style["form__input--middle"]}
            placeholder={"потому что гладиолус"}
          />
        </label>
      </div>
    </form>
  );
};
export default MeetupForm;
