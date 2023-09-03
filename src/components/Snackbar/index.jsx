import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useSnackbar from './useSnackbar';
import { snackbarConstants } from '../constants';
import SnackbarBody from './SnackbarBody';

// SnackbarContainer creates a portal if snackbar.show is true

function SnackbarContainer({ snackbar, setSnackbar, children }) {

    let snackbarContainerDiv = document.getElementById('snackbar__container');

    useEffect(() => {
        // Create a div and add it to document.body
        if (!snackbarContainerDiv) {
            snackbarContainerDiv = document.createElement('div');
            snackbarContainerDiv.id = 'snackbar__container';
            document.body.appendChild(snackbarContainerDiv)
        }
    }, []);

    return (
        <>
            {children}
            {snackbar?.show && ReactDOM.createPortal(<SnackbarBody snackbar={snackbar} setSnackbar={setSnackbar} />, snackbarContainerDiv)}
        </>
    )
}

export default SnackbarContainer;
export { useSnackbar };

SnackbarContainer.propTypes = {
    snackbar: PropTypes.shape({
        show: PropTypes.bool.isRequired,
        variant: PropTypes.oneOf([snackbarConstants.SUCCESS, snackbarConstants.ERROR, snackbarConstants.WARNING]),
        message: PropTypes.string
    }),
    variant: PropTypes.oneOf(['primary', 'secondary']),
    setSnackbar: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };
