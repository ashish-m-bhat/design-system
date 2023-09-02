import { createRoot } from 'react-dom/client';
import React from 'react';

const MyApp = () => {
  return <h1>You are in Design system</h1>
}
const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
