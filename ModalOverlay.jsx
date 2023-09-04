import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import Button from '../Button';
import cssClasses from './Modal.module.less';

function ModalOverlay({
    title,
    contentNode,
    primaryAction,
    secondaryAction,
    closeModalHandler,
    styles,
}) {

    const modalRef = useRef();

    // Close Modal on clicking outside
    const handleDocumentClick = (event) => {
		if (modalRef.current) {
			if (!modalRef.current.contains(event.target)) {
				closeModalHandler();
			}
		}
	};

    // Close Modal on pressing escape key
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            closeModalHandler();
        }
    };

    useEffect(() => {
        // Prevent scroll
        document.body.style.overflow = "hidden";
        // Timeout is needed else the event triggers immedietly when the modal opens and gets closed immedietly
        setTimeout(() => {
            document.addEventListener("click", handleDocumentClick);
            document.addEventListener("keydown", handleEscapeKey);
        }, 0);
        return (() => {
            document.removeEventListener("click", handleDocumentClick);
            document.removeEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "scroll";
        });
    }, []);

    return (
        <div className={cssClasses['modal--wrapper']}>
            <div className={cssClasses['modal']} style={styles} ref={modalRef}>
                <div className={cssClasses['header']}>
                    <span className={cssClasses['title']}>{title}</span>
                    <MdClose
                        size={25}
                        className={cssClasses['close--icon']}
                        onClick={closeModalHandler}
                    />
                </div>

                <div className={cssClasses['body']}>
                    {contentNode}
                </div>

                <div className={cssClasses['footer']}>
                    {secondaryAction &&
                        <Button
                            variant={secondaryAction['variant']}
                            label={secondaryAction['label']}
                            onClick={secondaryAction['onClick']}
                        />}
                    {primaryAction &&
                    <Button
                        variant={primaryAction['variant']}
                        label={primaryAction['label']}
                        onClick={primaryAction['onClick']}
                    />
                    }

                </div>
            </div>
        </div>
  )
}

export default ModalOverlay;
