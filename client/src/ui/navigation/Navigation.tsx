import React from "react";
import { useDispatch } from "react-redux";
import { NavigationItems } from "../navigation-items/NavigationItems";
import { UserMiniature } from "../user-miniature/UserMiniature";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { loading, userDataProps, error } = useTypedSelector((state) => state.currentUser);
  const { displayedName, userIcon } = userDataProps;
  if (error) return <div>Ошибка миниатюры пользователя: {error}</div>;
  return (
    <div className="header">
      <NavigationItems />
      {loading ? <div>Обновление миниатюры...</div> : <UserMiniature icon={userIcon} name={displayedName} />}
    </div>
  );
};
