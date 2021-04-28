import React from "react";
import { UserMiniatureProps } from "./UserMiniatureProps";

export const UserMiniature: React.FC<UserMiniatureProps> = (props) => {
  const { name, icon } = props;
  return (
    <div>
      <div className="nameUser">{`${name}`}</div>
      <div>
        <img alt={icon} src={icon} />
      </div>
    </div>
  );
};
