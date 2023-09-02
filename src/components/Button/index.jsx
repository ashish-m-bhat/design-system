import React from 'react';
import PropTypes from 'prop-types';
import cssClasses from './Button.module.less';

export const Button = (props) => {
  const { variant, styles, size, label, ...restProps } = props;
  return (
    <button
      type="button"
      className={[cssClasses['ds-button'], cssClasses[`ds-button--${size}`], cssClasses[`ds-button--${variant}`]].join(' ')}
      style={styles}
      {...restProps}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  styles: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  styles: {},
  size: 'medium',
  label: 'Button',
  onClick: () => {},
};
