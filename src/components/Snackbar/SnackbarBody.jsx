import React, { useEffect, useRef, useState } from 'react';
import { MdCheckCircle, MdClose, MdWarningAmber } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import cssClasses from './Snackbar.module.less'
import { snackbarConstants } from '../constants';

function SnackbarBody({ snackbar, setSnackbar }) {

    const progressBarRef = useRef(null);
    const snackbarBarRef = useRef(null);

    const [pauseSnackbar, setPauseSnackbar] = useState(false);

    // On finishing the timer, remove the snackbar
    // On pause, clear the timer
    useEffect(() => {
        let timer;
        if(pauseSnackbar) {
            clearTimeout(timer);
        } else {
            timer = setTimeout(() => setSnackbar(null), snackbarConstants.DEFAULT_TIMEOUT);
        }
        return (() => {
            timer && clearTimeout(timer);
        });
    }, [pauseSnackbar]);

    // For every 10ms, decrease the progress bar width
    // On pause, don't decrease the width
    useEffect(() => {
        if (pauseSnackbar) return;
        const initalBarWidth = parseFloat(window.getComputedStyle(progressBarRef.current)["width"]);

        let intervalId;
        intervalId = setInterval(() => {
            progressBarRef.current.style.width =
                parseFloat(window.getComputedStyle(progressBarRef.current)["width"]) - (initalBarWidth*10/snackbarConstants.DEFAULT_TIMEOUT) + "px";
        }, 10);

        return(() => {
            clearInterval(intervalId);
        })
    }, [pauseSnackbar]);

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

    // Pause the Timers (timeout & interval) when hovered
    const onMouseEnterSnackbar = () => {
           setPauseSnackbar(true);
    }

    const onMouseLeaveSnackbar = () => {
        setPauseSnackbar(false);
    }

    useEffect(() => {
        snackbarBarRef?.current?.addEventListener("mouseenter", onMouseEnterSnackbar);
        snackbarBarRef?.current?.addEventListener("mouseleave", onMouseLeaveSnackbar);
        return(() => {
            snackbarBarRef?.current?.removeEventListener("mouseenter", () => onMouseEnterSnackbar);
            snackbarBarRef?.current?.removeEventListener("mouseleave", onMouseLeaveSnackbar);
        })
    },[]);

  return (
    <div
        className={[
            cssClasses['snackbar__container'],
            cssClasses[`snackbar__container--${snackbar.variant || snackbarConstants.SUCCESS}`]
        ].join(' ')}
        ref={snackbarBarRef}
    >
        {/* Progress Bar wrapper. Inner <p> will shrink ( to preserve flex styling*/}
        <div style={{width: '100%'}}>
            <p
                className={[
                    cssClasses['progressBar'],
                    cssClasses[`progressBar--${snackbar.variant}`]
                ].join(' ')}
                ref={progressBarRef}>
            </p>
        </div>

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
