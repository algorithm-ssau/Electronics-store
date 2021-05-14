import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SignUp } from "../../ui/sign-up-form/SignUp";
import { SignIn } from "../../ui/sign-in-form/SignIn";
import { userIsRegistered } from "../../utils/utils";
import { logOut } from "../../store/action-creators/userAсtionCreator";

export const SignUpOrIn = () => {
  const dispatch = useDispatch();
  const userState = useTypedSelector((state) => state.currentUser);
  const showExitFromProfile = userIsRegistered(userState.userDataProps.emailAndPassword) || userState.message.error;
  const [signInOrSignUp, setSignInOrSignUp] = useState<"SIGN_IN" | "SIGN_UP">("SIGN_IN");

  const performLogOut = () => {
    dispatch(logOut());
  };

  if (showExitFromProfile) {
    return (
      <div>
        <div>Чтобы зарегистрироваться или войти, выйдите из своего профиля</div>
        <button type="button" className="loginIn" onClick={performLogOut}>
          <span className="descriptionLogIn">ВЫЙТИ</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      {signInOrSignUp === "SIGN_IN" && (
        <div>
          <SignIn />
          <div>
            <p>Еще не член нашего клуба?</p>
            <button type="button" className="loginIn" onClick={() => setSignInOrSignUp("SIGN_UP")}>
              <span className="descriptionLogIn">Зарегистрироваться</span>
            </button>
          </div>
        </div>
      )}
      {signInOrSignUp === "SIGN_UP" && (
        <div>
          <SignUp />
          <div>
            <p>Уже участник нашего клуба?</p>
            <button
              type="button"
              className="loginIn"
              onClick={() => {
                setSignInOrSignUp("SIGN_IN");
              }}
            >
              <span className="descriptionLogIn">Войти</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
