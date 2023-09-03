import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/Button';
import Header from './components/Header';
import SnackbarContainer, { useSnackbar} from './components/Snackbar';

const MyApp = () => {
  const [snackbar, setSnackbar] = useSnackbar();
  return (
  <div>
    <SnackbarContainer snackbar={snackbar} setSnackbar={setSnackbar}>
      <h1>You are in Design system</h1>
      <Header styles={{color: 'green'}} level={5}>I'm from Header</Header>
      <Button
        onClick={() => setSnackbar({
          show: true,
          variant: 'success',
          message: "Test message Test message"
        })}
        label="Snackbar"
      />
    </SnackbarContainer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
