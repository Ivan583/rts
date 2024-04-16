import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserLisr';
import { IUser } from './components/types/types';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchuUsers();
  }, []);

  async function fetchuUsers() {
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users') ;
      setUsers(responce.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="App">
      <Card
        onClick={(num) => console.log('click', num)} 
        variant={CardVariant.primary} 
        width='200px' 
        height='200px'
       >
        <button>Click me</button>
        <div>Some text</div>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
