import React from "react";
import { NavigationItems } from "../navigation-items/NavigationItems";
import { UserMiniature } from "../user-miniature/UserMiniature";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Navigation = () => {
  const { userDataProps, loading, message } = useTypedSelector((state) => state.currentUser);
  const { displayedName, userIcon } = userDataProps;

  const miniature = (): JSX.Element => {
    if (message.error) {
      return <div>Ошибка миниатюры пользователя: {message.text}</div>;
    }
    if (loading) {
      return <div>Обновление миниатюры...</div>;
    }
    // all good
    return <UserMiniature icon={userIcon} name={displayedName} />;
  };

  return (
    <div className="header">
      <NavigationItems />
      {miniature()}
    </div>
  );
};
