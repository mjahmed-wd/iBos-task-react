import React from "react";
import { useUserData } from "./UsersProvider";

const IndividualTableData = ({ user }) => {
  const { userName, userEmail } = user;
  const { allUsers, setAllUsers } = useUserData();

  const deleteUser = (email) => {

    const remainingUsers = allUsers.filter((user) => user.userEmail !== email);
    localStorage.setItem("users", JSON.stringify(remainingUsers));
    setAllUsers(remainingUsers);
    
  };
  return (
    <tr>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>
        <button className="btn__delete" onClick={() => deleteUser(userEmail)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default IndividualTableData;
