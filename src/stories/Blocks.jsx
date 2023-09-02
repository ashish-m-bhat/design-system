import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Description,
  Primary,
  Controls,
  Markdown
} from '@storybook/blocks';

function Blocks({ componentName, markdown }) {
  return (
    <>
        <Title />
        <h3>
          DS <code> <span>{componentName}</span> </code> component
          </h3>
        <Description />
        <Primary />
        <Controls />
        <Markdown>
          {markdown}
        </Markdown>
    </>
  )
}

export default Blocks;

Blocks.propTypes = {
    componentName: PropTypes.string,
    markdown: PropTypes.markdown,

};

Blocks.defaultProps = {
    componentName: '',
};
