import React from "react";

export const Registration = () => (
  <div>
    <div className="loginInForm">
      <span className="textLogIn">вход</span>
      <input type="text" placeholder="E-mail" className="inputDataRegistration" />
      <input type="password" placeholder="Password" className="inputDataRegistration" />
      <button type="button" className="loginIn">
        <span className="descriptionLogIn">ВОЙТИ</span>
      </button>
      <span className="buttonRegistration">зарегистрироваться</span>
    </div>
    <div className="loginInForm">
      <span className="textLogIn">регистрация</span>
      <input type="text" placeholder="Фамилия" className="inputDataRegistration" />
      <input type="text" placeholder="Имя" className="inputDataRegistration" />
      <input type="text" placeholder="Отчество" className="inputDataRegistration" />
      <input type="text" placeholder="E-mail" className="inputDataRegistration" />
      <input type="password" placeholder="Password" className="inputDataRegistration" />
      <button type="button" className="registrationButton">
        <span className="descriptionLogIn">зарегистрироваться</span>
      </button>
    </div>
  </div>
);
