import React from "react";

export const Registration = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Добро пожаловать!</h1>
        <div className="registerCard">
          <div>
            <span className="registerAuthorisationText">Авторизация</span>
            <div className="input-field-label1">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Email</label>
            </div>
            <div className="input-field">
              <input placeholder="Введите email" id="email" type="text" />
            </div>
            <div className="input-field-label">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Пароль</label>
            </div>
            <div className="input-field">
              <input placeholder="Введите пароль" id="password" type="text" />
            </div>
            <div>
              <button type="button" className="registerButtonSignIn">
                Войти
              </button>
              <button type="button" className="registerButtonSignUp">
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
