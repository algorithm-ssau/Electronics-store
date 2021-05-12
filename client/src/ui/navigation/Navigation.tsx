import React from "react";
import { NavigationItems } from "../navigation-items/NavigationItems";
import { UserMiniature } from "../user-miniature/UserMiniature";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Navigation = () => {
  const { userDataProps, loading, message } = useTypedSelector((state) => state.currentUser);
  const { displayedName, userIcon } = userDataProps;
  if (message.error) {
    return <div>Ошибка миниатюры пользователя: {message.text}</div>;
  }
  return (
    <div className="header">
      <NavigationItems />
      {loading ? <div>Обновление миниатюры...</div> : <UserMiniature icon={userIcon} name={displayedName} />}
    </div>
  );
};
