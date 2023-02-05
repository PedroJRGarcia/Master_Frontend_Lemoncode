import React from "react";
import { routes } from "@/router/routes";
import { Link, useParams } from "react-router-dom";
import { AppLayout } from "@/layout";

interface MemberDetailEntity {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>();

  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((r) => r.json())
      .then((r) => setMember(r));
  }, [id]);

  return member ? (
    <AppLayout>
      <h2>Detail Page:</h2>
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>name: {member.name}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <img src={member.avatar_url} alt="" />
      <div><Link to={routes.list}>Back to list page</Link></div>
    </AppLayout>
  ) : (
    <div>Loading...</div>
  );
};