import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import cssClasses from './Popover.module.less'

function Popover(props) {
    const {
        popoverComponent,
        children,
    } = props;

    const [showPopover, setShowPopover] = useState(false);

    const childrenRef = useRef();

    const handleMouseHover = () => {
        setShowPopover(true);
    }

    const handleMouseOut = (event) => {
        setShowPopover(false);
    }

    useEffect(() => {
        childrenRef.current.addEventListener('mouseover', handleMouseHover);
        childrenRef.current.addEventListener('mouseout', handleMouseOut);
        return () => {
            childrenRef.current.removeEventListener('mouseover', handleMouseHover);
            childrenRef.current.removeEventListener('mouseout', handlhandleMouseOuteMouseHover);
        }
    }, [])


    return (
        <div className={cssClasses['popover__wrapper']}>
            <div ref={childrenRef} className={cssClasses['popover__children']}>
                {children}
            </div>

            {showPopover &&
                <div>
                    <Card
                        styles={{}}
                        variant='default'
                    >
                        {popoverComponent}
                    </Card>
                </div>
            }

        </div>
    )
}

export default Popover;

Popover.propTypes = {
    children: PropTypes.node.isRequired,
    popoverComponent: PropTypes.node,
};

Popover.defaultProps = {
    popoverComponent: <></>
};
