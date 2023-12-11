import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Autocomplete from './components/Autocomplete';
import Button from './components/Button';
import Card from './components/Card';
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
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '0 0 10rem 0'}}>
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

      {/* Card */}
      <div>
        <Card
          styles={{}}
          variant='clickable'
          onClick={() => console.log('clicked')}
          classname="card-style"
        >
          Card
        </Card>
      </div>

      {/* Autocomplete */}
      <Autocomplete label={"Label goes here"} dataSet={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae blanditiis et veniam tenetur quos porro placeat deleniti exercitationem sit, eius, quod ipsa cum eaque adipisci quia sunt sapiente impedit odio hic animi commodi corporis illo? Reprehenderit rem odit quod et veritatis commodi fugiat recusandae, expedita reiciendis nemo eveniet molestias a. Commodi odit magnam quidem, enim exercitationem sed cum. Quibusdam ab laudantium ea accusantium adipisci quaerat? Aliquid maxime vel error placeat recusandae, omnis, sint incidunt eos doloribus ullam atque cumque. Commodi eius esse ipsam amet vel neque? Debitis aut eligendi quibusdam id labore nesciunt! Ea deserunt voluptas ut illo modi eos.".split(' ')} />

    </SnackbarContainer>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyApp />);
