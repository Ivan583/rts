import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div className="App">
      <Card variant={CardVariant.primary} width='200px' height='200px'>
        <button>Click me</button>
        <div>Some text</div>
      </Card>
    </div>
  );
}

export default App;
