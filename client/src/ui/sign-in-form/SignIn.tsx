import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../../store/action-creators/userAсtionCreator";
import { EmailAndPassword } from "../user-data/UserDataProps";

export const SignIn = () => {
  const initialState = { email: "", password: "" };
  const history = useHistory();
  const [emailAndPassword, setEmailAndPassword] = useState<EmailAndPassword>(initialState);
  const dispatch = useDispatch();
  const handleSignInClick = () => {
    dispatch(signIn(emailAndPassword));
    history.push("/products");
  };

  return (
    <div className="loginInForm">
      <span className="textLogIn">вход</span>
      <div>
        <input
          type="text"
          placeholder="E-mail"
          className="inputDataRegistration"
          value={emailAndPassword.email}
          onChange={(event) =>
            setEmailAndPassword((prevState) => {
              return { ...prevState, email: event.target.value };
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          className="inputDataRegistration"
          value={emailAndPassword.password}
          onChange={(event) =>
            setEmailAndPassword((prevState) => {
              return {
                ...prevState,
                password: event.target.value,
              };
            })
          }
        />
      </div>
      <button type="button" className="loginIn" onClick={handleSignInClick}>
        <span className="descriptionLogIn">ВОЙТИ</span>
      </button>
    </div>
  );
};
