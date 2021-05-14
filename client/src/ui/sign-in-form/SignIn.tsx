import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { signIn } from "../../store/action-creators/userAсtionCreator";
import { EmailAndPassword } from "../user-data/UserDataProps";

export const SignIn = () => {
  const userState = useTypedSelector((state) => state.currentUser);
  const initialState = userState.userDataProps.emailAndPassword
    ? userState.userDataProps.emailAndPassword
    : { email: "", password: "" };
  const [emailAndPassword, setEmailAndPassword] = useState<EmailAndPassword>(initialState);
  const dispatch = useDispatch();
  const handleSignInClick = () => {
    dispatch(signIn(emailAndPassword));
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
