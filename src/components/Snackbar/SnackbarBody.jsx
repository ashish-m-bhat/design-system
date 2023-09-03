import React, { useEffect, useRef } from 'react';
import { MdCheckCircle, MdClose, MdWarningAmber } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import cssClasses from './Snackbar.module.less'
import { snackbarConstants } from '../constants';

function SnackbarBody({ snackbar, setSnackbar }) {

    const progressBarRef = useRef(null);

    // For every 10ms, decrease the progress bar width
    useEffect(() => {
        const initalBarWidth = parseFloat(window.getComputedStyle(progressBarRef.current)["width"]);
        let intervalId;
        intervalId = setInterval(() => {
            progressBarRef.current.style.width =
                parseFloat(window.getComputedStyle(progressBarRef.current)["width"]) - (initalBarWidth*10/snackbarConstants.DEFAULT_TIMEOUT) + "px";
        }, 10);

        return(() => {
            clearInterval(intervalId);
        })
    }, []);

    // Show the left icon for success, error & warning types
    const getLeftIcon = () => {
        switch(snackbar.variant) {
            case snackbarConstants.ERROR:
                return (
                    <IoMdCloseCircle
                    className={cssClasses[`${snackbar.variant}__icon`]}
                    size={22}
                />
                );
            case snackbarConstants.WARNING:
                return (
                    <MdWarningAmber
                        className={cssClasses[`${snackbar.variant}__icon`]}
                        size={22}
                    />
                );
            case snackbarConstants.SUCCESS:
            default:
                return (
                    <MdCheckCircle
                        className={cssClasses[`${snackbar.variant}__icon`]}
                        size={22}
                    />
                );
        }
    };

  return (
    <div
        className={[
            cssClasses['snackbar__container'],
            cssClasses[`snackbar__container--${snackbar.variant || snackbarConstants.SUCCESS}`]
        ].join(' ')}
    >
        {/* Progress Bar */}
        <p className={[cssClasses['progressBar'], cssClasses[`progressBar--${snackbar.variant}`]].join(' ')} ref={progressBarRef}></p>

        {/* Left icon, text message & close icon */}
        <div className={cssClasses['body']}>
           {getLeftIcon()}

            <span className={cssClasses['message']}>
                {snackbar.message}
            </span>
            <MdClose
                onClick={() => setSnackbar(null)}
                className={cssClasses['close-icon']}
                size={22}
            />
        </div>
    </div>
  )
}

export default SnackbarBody;
