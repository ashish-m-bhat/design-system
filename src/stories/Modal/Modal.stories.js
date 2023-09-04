import { useState } from "react";
import { Markdown } from '@storybook/blocks';
import Modal  from "../../components/Modal";
import ReadMe from './README.md?raw';
import Example from './Example.md?raw';
import Blocks from "../Blocks";
import Button from "../../components/Button";
import { getDummyModalBody } from '../../components/Modal/helper';

export default {
  title: 'Components/Modal',
  component: Modal,
    parameters: {
      layout: 'centered',
      docs: {
        page: () => <>
          <Blocks
            componentName="<Modal />"
            markdown={ReadMe}
          />
          <Markdown>
            {Example}
        </Markdown>
        </>
      },
    },
  tags: ['autodocs'],
  args: {
    title: "This is a modal",
    contentNode: getDummyModalBody(),
    closeModalHandler: () => {},
    primaryAction:{
      variant: "primary",
      label: "Ok",
      onClick: () => {}
    },
    secondaryAction:{
      variant: "secondary",
      label: "Cancel",
      onClick: () => {}
    },
    styles:{color: 'black'}
  }
};

export const ModalCanvas = (args) => {
  const [showModal, setShowModal] = useState(false);
  args.closeModalHandler = () => setShowModal(false);
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        label="Show Modal"
      />
      {showModal && <Modal {...args} />}
    </>
  );
}

