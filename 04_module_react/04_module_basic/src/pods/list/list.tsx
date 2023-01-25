import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../my-provider";
import { OrganizationSearch } from "../../organization-search";
import classes from "./list.styles.css";
import Pagination from "@mui/material/Pagination";
// import { ReactPagination } from "./pagination";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { orgName, setOrgName } = React.useContext(MyContext);

  const handleSearch = (organizationName: string) => {
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  React.useEffect(() => {
    handleSearch(orgName);
  }, []);

  // const PaginationControlled: React.FC = () => {
  //   const [page, setPage] = React.useState(1);
  //   const handleChange = (event, value) => {
  //     setPage(value);
  //   };

  //   return (
  //     <div>
  //       <Pagination
  //         count={5}
  //         page={page}
  //         onChange={handleChange}
  //         variant="outlined"
  //         color="primary"
  //         shape="rounded"
  //       />
  //     </div>
  //   );
  // };

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
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      {/* <PaginationControlled /> */}
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
