import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <header className="">User Logged in</header>
      <main>{children}</main>
    </div>
  );
};
