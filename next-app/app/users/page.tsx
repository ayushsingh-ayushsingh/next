import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UsersPage = async () => {
  // This way Caching is done automatically...
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // if data changes frequently then use no-store
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  // cache: "no-store",
  // });

  // if you want to revalidate data every 10 seconds
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });

  const users: User[] = await res.json();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extralight p-2">Users</h1>
      <h3 className="text-3xl font-extralight p-2">
        {new Date().toLocaleTimeString()}
      </h3>
      <div className="items-center">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
