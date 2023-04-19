import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BlockTitle, List, ListItem} from 'framework7-react'

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <BlockTitle>Информация</BlockTitle>
      { users.map((user) => (
        <List key={user.id} mediaList>
          <ListItem title="ФИО:" subtitle={user.user_name} />
          <ListItem title="Номер телефона:" value={user.phone_number} />
          <ListItem title="Номер автомобиля:" value={user.car_number} />
        </List>
      ))}
    </>
  );
}
export default UserList;
