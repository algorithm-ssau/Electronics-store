import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { signUp } from "../../store/action-creators/userAсtionCreator";
import { UserDataSignUpProps } from "../user-data/UserDataProps";

export const SignUp = () => {
  const userState = useTypedSelector((state) => state.currentUser);
  const { userDataProps } = userState;
  const displayForGuest = true;
  const displayForAlreadyRegisteredUser = !displayForGuest;
  const initialState: UserDataSignUpProps = {
    displayedName: "",
    emailAndPassword: {
      email: "",
      password: "",
    },
    realName: "",
    userIcon: "",
  };
  const dispatch = useDispatch();
  const [realName, setRealName] = useState(initialState.realName);
  const [displayedName, setDisplayedName] = useState(initialState.displayedName);
  const [email, setEmail] = useState(initialState.emailAndPassword.email);
  const [password, setPassword] = useState(initialState.emailAndPassword.password);
  const [imageSource, setImageSource] = useState(initialState.userIcon);
  const handleSignUpClick = () => {
    // dispatch(signUp());
  };

  return (
    <div className="loginInForm">
      <span className="textLogIn">регистрация</span>
      <input
        type="text"
        placeholder="Иванов Иван Иванович"
        className="inputDataRegistration"
        value={realName}
        onChange={(event) => setRealName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Иванов Иван Иванович"
        className="inputDataRegistration"
        value={displayedName}
        onChange={(event) => setDisplayedName(event.target.value)}
      />
      <input
        type="text"
        placeholder="E-mail"
        className="inputDataRegistration"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="inputDataRegistration"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="text"
        placeholder="Путь к картинке"
        className="inputDataRegistration"
        value={imageSource}
        onChange={(event) => setImageSource(event.target.value)}
      />
      <button type="button" className="registrationButton" onClick={handleSignUpClick}>
        <span className="descriptionLogIn">зарегистрироваться</span>
      </button>
    </div>
  );
};
