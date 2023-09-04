import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/Button';
import Header from './components/Header';
import Modal from './components/Modal';
import { getDummyModalBody } from './components/Modal/helper';
import SnackbarContainer, { useSnackbar} from './components/Snackbar';

const MyApp = () => {
  const [snackbar, setSnackbar] = useSnackbar();
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem'}}>
    <SnackbarContainer snackbar={snackbar} setSnackbar={setSnackbar}>
      <h1>You are in Design system</h1>

      {/* Header */}
      <Header styles={{color: 'green'}} level={5}>I'm from Header</Header>

      {/* Snackbar */}
      <div>
        <Button
          onClick={() => setSnackbar({
            show: true,
            variant: 'success',
            message: "Test message Test message"
          })}
          label="Snackbar"
        />
      </div>

      {/* Modal */}
      <div>
        <Button
          label="Modal"
          onClick={() => setShowModal(true)}
        />
        {showModal && <Modal
          title="This is a modal"
          contentNode={getDummyModalBody()}
          closeModalHandler={closeModalHandler}
          primaryAction={
            {
              variant: "primary",
              label: "Ok",
              onClick: closeModalHandler
            }
          }
          secondaryAction={
            {
              variant: "secondary",
              label: "Cancel",
              onClick: closeModalHandler
            }
          }
          styles={{color: 'black'}}
        />
        }
      </div>

    </SnackbarContainer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
