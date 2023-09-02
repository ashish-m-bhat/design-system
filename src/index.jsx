import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

const MyApp = () => {
  return (<>
    <h1>You are in Design system</h1>
    <Header />
  </>)
}
const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
