import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/Button';
import Header from './components/Header';

const MyApp = () => {
  return (
  <div>
    <h1>You are in Design system</h1>
    <Header />
    <Button onClick={() => console.log('Clicked!')} />
  </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
