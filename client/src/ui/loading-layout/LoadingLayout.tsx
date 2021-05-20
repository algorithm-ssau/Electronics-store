import React from "react";
import Loader from "react-loader-spinner";
import cn from "classnames";
import styles from "./styles.module.scss";
import { LoadingLayoutProps } from "./LoadingLayoutProps";

export const LoadingLayout: React.FC<LoadingLayoutProps> = ({ children, isActive }) => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.overlay, !isActive && styles.hidden)}>
        <Loader type="Grid" color="#00BFFF" height={100} width={100} />
      </div>
      {children}
    </div>
  );
};
