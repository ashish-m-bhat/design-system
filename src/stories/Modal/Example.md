Code Example

```jsx
const [showModal, setShowModal] = useState(false);
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

```
