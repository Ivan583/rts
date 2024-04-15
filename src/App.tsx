import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserLisr';
import { IUser } from './components/types/types';

function App() {
  const users: IUser[] = [
    {id: 1, name: 'Tiger', email: 'wer@bk.en', address: {city: 'Zubrovka', street: 'Green', zipcode: '44533'}},
    {id: 2, name: 'Wolf', email: 'byk@bk.en', address: {city: 'Zybun', street: 'Forest', zipcode: '52644'}},
  ];

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
