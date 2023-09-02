import Header from '../../components/Header';
import ReadMe from './README.md?raw';
import Blocks from "../Blocks";

export default {
  title: 'Components/Header',
  component: Header,
    parameters: {
      layout: 'centered',
      docs: {
        page: () => <>
          <Blocks
            componentName="<Header />"
            markdown={ReadMe}
          />
        </>
      },
    },
  tags: ['autodocs'],
  args: {
    level: 1,
    children: <>This is a heading!</>
  }
};

const Template = (args) => (
    <Header {...args} />
);

export const HeaderCanvas = Template.bind({});
