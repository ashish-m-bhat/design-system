import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from './Card.module.less';
import { cardConstants } from '../constants';

function Card({
    variant,
    onClick,
    styles,
    children,
}) {
  const clickable = variant === cardConstants.CLICKABLE;

  return (
    <div
      className={[
        cssClasses['card'],
        clickable ? cssClasses[`clickable`]: '']
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
    children: PropTypes.node.isRequired
};

Card.defaultProps = {
    variant: 'clickable',
    onClick: () => {},
    styles: {}
};

export default Card;
