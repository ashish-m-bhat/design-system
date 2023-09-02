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

        <Markdown>
          {markdown}
        </Markdown>

        <Description />

        <Primary />

        <Controls />

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
