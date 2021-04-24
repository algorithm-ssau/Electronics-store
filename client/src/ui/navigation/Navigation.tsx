import React from "react";
import { NavigationItems } from "../navigation-items/NavigationItems";
import { UserMiniature } from "../user-miniature/UserMiniature";

export const Navigation = () => {
  return (
    <div>
      <NavigationItems />
      <UserMiniature />
    </div>
  );
};
