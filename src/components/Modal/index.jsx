import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalBackdrop from './ModalBackdrop';
import ModalOverlay from './ModalOverlay';

const createElement = (id, type) => {
    const element = document.createElement(type);
    element.id = id;
    document.body.appendChild(element);
    return element;
};

function Modal({
    title,
    contentNode,
    primaryAction,
    secondaryAction,
    closeModalHandler,
    styles
}) {
    const modalBackdrop = document.getElementById('modalBackdrop') || createElement('modalBackdrop', 'div');
    const modal = document.getElementById('modal') || createElement('modal', 'div')

    useEffect(() => {
        // Remove the divs
        return(() => {
            document.body.removeChild(document.getElementById('modalBackdrop'));
            document.body.removeChild(document.getElementById('modal'))
        });
    }, []);
  return (
    <>
        {createPortal(<ModalBackdrop />, modalBackdrop)}
        {createPortal(
            <ModalOverlay
                title={title}
                contentNode={contentNode}
                primaryAction={primaryAction}
                secondaryAction={secondaryAction}
                closeModalHandler={closeModalHandler}
                styles={styles}
            />,
            modal
        )}
    </>
  );
}

export default Modal;

Modal.propTypes = {
    title: PropTypes.string,
    contentNode: PropTypes.node,
    primaryAction: PropTypes.shape({
        variant: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func
    }),
    secondaryAction: PropTypes.shape({
        variant: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func
    }),
    closeModalHandler: PropTypes.func.isRequired,
    styles: PropTypes.object
}

Modal.defaultProps = {
    title: '',
    contentNode: <></>,
    styles: {}
  }
