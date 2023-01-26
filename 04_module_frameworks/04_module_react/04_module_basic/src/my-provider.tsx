import React from "react";

interface OrgContext {
  orgName: string;
  setOrgName: (orgName: string) => void;
}

export const MyContext = React.createContext<OrgContext>({
  orgName: "",
  setOrgName: () => {
    console.log(
      "Hey!!! You forgot to type your Provider"
    );
  },
});

interface Props {
  children: React.ReactNode;
}

export const MyProvider = (props: Props) => {
  const { children } = props;
  const [orgName, setOrgName] = React.useState("lemoncode");

  console.log(orgName);

  return (
    <MyContext.Provider value={{ orgName, setOrgName }}>
      {children}
    </MyContext.Provider>
  );
};