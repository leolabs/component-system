import React from "react";
import classNames from "classnames";

import "./button.scss";

export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className={classNames("button")}>{children}</button>
);
