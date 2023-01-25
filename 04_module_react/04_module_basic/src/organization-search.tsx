import React from "react";

interface Props {
  onSearch: (organizationName: string) => void;
  organizationName: string;
  setOrganizationName: (organizationName: string) => void;
}

export const OrganizationSearch: React.FC<Props> = (props) => {
  const { onSearch, organizationName, setOrganizationName } = props;

  return (
    <>
      <span>Organization: </span>
      <input
        type="text"
        value={organizationName}
        onChange={(e) => {
          setOrganizationName(e.target.value);
        }}
      />
      <button onClick={() => onSearch(organizationName)}>Search!</button>
    </>
  );
};