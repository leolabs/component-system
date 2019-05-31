import React from "react";
import classNames from "classnames";

import styles from "./button.module.scss";

export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className={classNames(styles.button)}>{children}</button>
);
