import React from "react";
import { Link } from "react-router-dom";
import { UserMiniatureProps } from "./UserMiniatureProps";

export const UserMiniature: React.FC<UserMiniatureProps> = (props) => {
  const { name, icon } = props;
  return (
    <Link to="/User">
      <div>
        <div className="nameUser">{`${name}`}</div>
        <div>
          <img alt={icon} src={icon} />
        </div>
      </div>
    </Link>
  );
};
