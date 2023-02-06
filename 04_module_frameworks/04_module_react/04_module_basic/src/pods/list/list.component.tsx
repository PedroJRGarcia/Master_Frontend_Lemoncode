import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import { MyContext } from "../../my-provider";
import { OrganizationSearch } from "../../organization-search";
import { MemberEntity } from "./list.vm"
import { ListPage } from "./list.container"
import classes from "./list.styles.css";
import Pagination from "@mui/material/Pagination";

interface Props {
  members: MemberEntity[][];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;
  const { orgName, setOrgName } = React.useContext(MyContext);
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    handleSearch(orgName);
  }, []);


  return (
    <>
      <h2>List page:</h2>
      <OrganizationSearch
        onSearch={handleSearch}
        organizationName={orgName}
        setOrganizationName={setOrgName}
      />
      <div id="container" className={classes.container}>
        <span className={classes.header}>Avatar</span>
        <span className={classes.header}>Id</span>
        <span className={classes.header}>Name</span>
        {members[page - 1]?.map((member) => (
          <React.Fragment key={member.id}>
            <span>
              <img src={member.avatar_url} width={80} />
            </span>
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <div>
        <Pagination
          count={members.length}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
      </div>
    </>
  );
};