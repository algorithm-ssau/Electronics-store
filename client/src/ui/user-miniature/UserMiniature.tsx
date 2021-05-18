import React from "react";
import { Link } from "react-router-dom";
import { UserMiniatureProps } from "./UserMiniatureProps";

export const UserMiniature: React.FC<UserMiniatureProps> = (props) => {
  const { name, icon } = props;
  return (
    <Link to="/user">
      <div>
        <div className="nameUser">{`${name}`}</div>
        <img alt={icon} className="userImageSmall" src={icon} />
      </div>
    </Link>
  );
};
