import React, { useState } from "react";
import { useUserData } from "./UsersProvider";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { setAllUsers } = useUserData();

  const submitForm = (e) => {
    const user = { userName, userEmail };

    let users = [];

    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
      
    }

    const uniqueUserCheck = users.find((user) => user.userEmail === userEmail);

    if (!!uniqueUserCheck) {
      alert("Duplicate Entry");
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Success");
    }

    setAllUsers(users);

    e.preventDefault();
  };
  return (
    <div>
      <form id="form" onSubmit={submitForm}>
        <div className="input__field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="input__field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
