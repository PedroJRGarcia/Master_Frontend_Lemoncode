import React from "react";
import { routes } from "@/router/routes";
import { Link } from "react-router-dom";
import { MemberEntity } from "./vm.list";

interface Props {
  member: MemberEntity;
}

export const IdList: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <React.Fragment key={member.id}>
        <span>
          <img src={member.avatar_url} width={80} />
        </span>
        <span>{member.id}</span>
        <Link to={routes.detail(member.login)}>{member.login}</Link>
      </React.Fragment>
    </>
  );
};
