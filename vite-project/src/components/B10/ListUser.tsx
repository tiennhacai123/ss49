import React from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  Id: number;
  Name: string;
  Email: string;
  Address: string;
}

export default function ListUser() {
  const navigate = useNavigate();
  
  const users: User[] = [
    { Id: 1, Name: 'abc', Email: 'abc@example.com', Address: 'Ha Noi' },
    { Id: 2, Name: 'xyz', Email: 'xyz@example.com', Address: 'Ha Nam' },
    { Id: 3, Name: 'abcdef', Email: 'abcdef@example.com', Address: 'Ninh Binh' },
  ];

  const handleClick = (userId: number) => {
    navigate(`/user-detail/${userId}`);
  };

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.Id}>
            <p>Id:{user.Id}</p>
            <p>Name: {user.Name}</p>
            <p>Email: {user.Email}</p>
            <p>Address: {user.Address}</p>
            <button onClick={() => handleClick(user.Id)}>Xem chi tiết</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
