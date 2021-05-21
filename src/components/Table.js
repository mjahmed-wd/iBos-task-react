import React from "react";
import IndividualTableData from "./IndividualTableData";
import { useUserData } from "./UsersProvider";

const Table = () => {
  const { allUsers } = useUserData();

  return (
    <div className="display__data">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="table__body">
          {allUsers.map((user, index) => (
            <IndividualTableData key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
