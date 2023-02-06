import React from "react";
import { chunk } from "lodash";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[][]>([]);

  const handleSearch = (organizationName: string) => {
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
      .then((response) => response.json())
      .then((json) => {
        setMembers(chunk(json, 5));
      });
  };

  return (
    <>
      <List members={members} />
    </>
  );
};
