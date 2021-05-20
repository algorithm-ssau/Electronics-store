import React from "react";
import { UserDataProps } from "./UserDataProps";
import { checkIsGuest } from "../../utils/utils";
import { LoadingLayout } from "../loading-layout/LoadingLayout";
import { AdminData } from "../admin-data/AdminData";

export const UserData: React.FC<UserDataProps> = (props) => {
  const { userDataProps, loading, message } = props;
  const { displayedName, userIcon, userVerified, realName, isAdmin, emailAndPassword, account } = userDataProps;
  const isGuest = checkIsGuest(emailAndPassword);
  if (message.error) {
    return <div>Что то пошло нет так! {message.text}</div>;
  }
  return (
    <LoadingLayout isActive={loading}>
      <div className="dataUser">
        <div className="singleLineBlocks">
          <img className="userImage" src={userIcon} alt={userIcon} />
        </div>
        <div className="singleLineBlocks">
          <div className="userDescription">
            {isAdmin && <AdminData />}
            <h5>{displayedName}</h5>
            {!userVerified && !isGuest && (
              <h5>Вы не прошли верификацию, дождитесь пока один из администраторов не верифицирует вас</h5>
            )}
            {!isGuest && <h5>Настоящее имя: {realName}</h5>}
            {!isGuest && userVerified && <h5>Баланс: ${account}</h5>}
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
};
