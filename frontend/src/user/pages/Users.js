import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadedUsers, setLoadedUsers] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:3000/api/users");
      const responseData = await response.json();
      setLoadedUsers(responseData.Users);
    };
    sendRequest();
  }, []);
  return <UsersList items={USERS} />;
};

export default Users;
