import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from './Card.module.less';
import { cardConstants } from '../constants';

function Card({
    variant,
    onClick,
    styles,
    classname,
    children,
}) {
  const clickable = variant === cardConstants.CLICKABLE;
  return (
    <div
      className={[
        cssClasses['card'],
        clickable ? cssClasses[`clickable`]: '',
        classname]
        .join(' ')}
      style={styles}
      onClick={clickable ? onClick : () => {}}
    >
        {children}
    </div>
  )
}

Card.proptypes = {
    variant: PropTypes.string,
    onClick: PropTypes.func,
    styles: PropTypes.object,
    classname: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Card.defaultProps = {
    variant: 'clickable',
    onClick: () => {},
    styles: {},
    classname: ''
};

export default Card;
