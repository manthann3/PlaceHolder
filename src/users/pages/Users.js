import React from "react";
import UserList from "../components/UserLists";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Manthan Sharma",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEPzB7r3tgDAw/profile-displayphoto-shrink_400_400/0/1595507802094?e=1616025600&v=beta&t=7jWNnL6TqY9Uo8TJWkCz73z57XfHmoO-MASLMd7rzss",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
