import React from "react";
import { MyContext } from "../../my-provider";
import { OrganizationSearch } from "../../organization-search";
import { MemberEntity } from "./vm.list";
import classes from "./styles.list.css";
import Pagination from "@mui/material/Pagination";
import { IdList } from "./member.list";

interface Props {
  members: MemberEntity[][];
  handleSearch: (orgName: string) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, handleSearch } = props;
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
          <IdList member={member} />
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
