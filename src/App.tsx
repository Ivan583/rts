import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
// import UserList from './components/UserLisr';
import { ITodo, IUser } from './components/types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchuUsers();
    fetchTodos();
  }, []);

  async function fetchuUsers() {
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users') ;
      setUsers(responce.data);
    } catch (e) {
      alert(e);
    }
  }

  async function fetchTodos() {
    try {
      const responce = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10') ;
      setTodos(responce.data);
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
      {/* <UserList users={users} /> */}
      <List 
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
        />
    </div>
  );
}

export default App;
