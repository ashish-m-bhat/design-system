import { Button } from "../../components/Button";
import ReadMe from './README.md?raw';
import Blocks from "../Blocks";


export default {
  title: 'Components/Button',
  component: Button,
    parameters: {
      layout: 'centered',
      docs: {
        page: () => <>
          <Blocks
            componentName="<Button />"
            markdown={ReadMe}

          />
        </>
      },
    },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'medium',
    styles: {},
    label: 'Button',
    onClick: () => {},
  }
};

const Template = (args) => (
    <Button {...args} />
);

export const ButtonCanvas = Template.bind({});
