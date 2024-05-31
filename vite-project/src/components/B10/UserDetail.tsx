import React from 'react';
import { useParams } from 'react-router-dom';

interface User {
  Id: number;
  Name: string;
  Email: string;
  Address: string;
}

interface UserDetailParams {
  userId: string;
}

export default function UserDetail() {
  const { userId } = useParams<UserDetailParams>();

  const users: User[] = [
    { Id: 1, Name: 'abc', Email: 'abc@example.com', Address: 'Ha Noi' },
    { Id: 2, Name: 'xyz', Email: 'xyz@example.com', Address: 'Ha Nam' },
    { Id: 3, Name: 'abcdef', Email: 'abcdef@example.com', Address: 'Ninh Binh' },
  ];

  const user = users.find((u) => u.Id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p>Id:{user.Id}</p>
      <p>Name: {user.Name}</p>
      <p>Email: {user.Email}</p>
      <p>Address: {user.Address}</p>
    </div>
  );
}
