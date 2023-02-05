import React from "react";
import classes from "./center.layout.styles.css";

interface Props {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};
