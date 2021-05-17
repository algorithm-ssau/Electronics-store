import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SignUp } from "../../ui/sign-up-form/SignUp";
import { SignIn } from "../../ui/sign-in-form/SignIn";
import { userIsRegistered } from "../../utils/utils";
import { logOut } from "../../store/action-creators/userAсtionCreator";
import { clearOrders } from "../../store/action-creators/orderListActionCreator";

export const SignUpOrIn = () => {
  const dispatch = useDispatch();
  const userState = useTypedSelector((state) => state.currentUser);
  const showExitFromProfile = userIsRegistered(userState.userDataProps.emailAndPassword) || userState.message.error;
  const [signInOrSignUp, setSignInOrSignUp] = useState<"SIGN_IN" | "SIGN_UP">("SIGN_IN");

  const performLogOut = async () => {
    await dispatch(logOut());
    await dispatch(clearOrders());
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
            <div className="stillNotWithUs">Еще не член нашего клуба?</div>
            <button type="button" className="bottomRegistrationButton" onClick={() => setSignInOrSignUp("SIGN_UP")}>
              <span className="descriptionLogIn">Зарегистрироваться</span>
            </button>
          </div>
        </div>
      )}
      {signInOrSignUp === "SIGN_UP" && (
        <div>
          <SignUp />
          <div>
            <div className="stillNotWithUs">Уже участник нашего клуба?</div>
            <button
              type="button"
              className="bottomSignInButton"
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
