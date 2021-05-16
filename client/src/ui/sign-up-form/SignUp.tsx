import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../store/action-creators/userAсtionCreator";
import { EmailAndPassword, UserDataSignUpProps } from "../user-data/UserDataProps";
import { getNavigationLinkTo } from "../../utils/getNavigationLinkTo";

export const SignUp = () => {
  const history = useHistory();
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
  const dispatchChainLogOut = async (userSignUpProps: UserDataSignUpProps) => {
    const { emailAndPassword } = userSignUpProps;
    await dispatch(signUp(userSignUpProps));
    await dispatch(signIn(emailAndPassword));
  };
  const handleSignUpClick = async () => {
    const emailAndPassword: EmailAndPassword = { email, password };
    const userSignUpProps: UserDataSignUpProps = { displayedName, realName, emailAndPassword, userIcon: imageSource };
    await dispatchChainLogOut(userSignUpProps);
    history.push(getNavigationLinkTo("PAGE_PRODUCT-CATALOGUE"));
  };

  return (
    <div className="loginInForm">
      <span className="textLogIn">регистрация</span>
      <input
        type="text"
        placeholder="Настоящее имя"
        className="inputDataRegistration"
        value={realName}
        onChange={(event) => setRealName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Отображаемое имя"
        className="inputDataRegistration"
        value={displayedName}
        onChange={(event) => setDisplayedName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Почта"
        className="inputDataRegistration"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        className="inputDataRegistration"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        type="text"
        placeholder="Путь к иконке"
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
