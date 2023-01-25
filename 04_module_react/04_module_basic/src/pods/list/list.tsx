import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../my-provider";
import { OrganizationSearch } from "../../organization-search";
import classes from "./list.styles.css";
import Pagination from "@mui/material/Pagination";
import { chunk } from "lodash";
// import { ReactPagination } from "./pagination";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { orgName, setOrgName } = React.useContext(MyContext);
  const [splitMembers, setSplitMembers] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const handleSearch = (organizationName: string) => {
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
    .then((response) => (response.json()))
    .then((json) => {
      setMembers(json)
      setSplitMembers(chunk(json, 5))
    });
  };

  const handleChange = (event, value) => {
  
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
        {members.map((member) => (
          <div className={classes.row} key={member.id}>
            <img src={member.avatar_url} width={ 40 } />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          count={Math.round( (members.length/5) + 1 )}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
          shape="rounded"
        />
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
