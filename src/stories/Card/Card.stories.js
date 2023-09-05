import Card  from "../../components/Card";
import ReadMe from './README.md?raw';
import Blocks from "../Blocks";
import { cardConstants } from "../../components/constants";

export default {
  title: 'Components/Card',
  component: Card,
    parameters: {
      layout: 'centered',
      docs: {
        page: () => <>
          <Blocks
            componentName="<Card />"
            markdown={ReadMe}
          />
        </>
      },
    },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [cardConstants.DEFAULT, cardConstants.CLICKABLE],
      control: { type: 'radio' }
    }
  },
  args: {
    styles: {},
    variant: cardConstants.CLICKABLE,
    onClick: () => {}
  }
};

export const CardCanvas = (args) => {
  return (
  <Card {...args}>
    <p>This is a Card</p>
  </Card>
  );
}
