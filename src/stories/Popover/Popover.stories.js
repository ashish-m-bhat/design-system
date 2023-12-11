import { Markdown } from '@storybook/blocks';
import ReadMe from './README.md?raw';
import Blocks from "../Blocks";
import Example from './Example.md?raw';
import Popover from '../../components/Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <>
        <Blocks
          componentName="<Popover />"
          markdown={ReadMe}
        />
        <Markdown>
          {Example}
        </Markdown>
      </>
    },
  },
  tags: ['autodocs'],
  args: {
    popoverComponent: <p>This is a popover</p>
  }
};

export const PopoverCanvas = (args) => {
  return (
    <Popover {...args}>
        <p>Hover over me!</p>
    </Popover>
  );
};
