import { Markdown } from '@storybook/blocks';
import SnackbarContainer, { useSnackbar } from "../../components/Snackbar";
import ReadMe from './README.md?raw';
import Example from './Example.md?raw';
import Blocks from "../Blocks";
import { snackbarConstants } from "../../components/constants";
import Button from "../../components/Button";

export default {
  title: 'Components/Snackbar',
  component: SnackbarContainer,
    parameters: {
      layout: 'centered',
      docs: {
        page: () => <>
          <Blocks
            componentName="<SnackbarContainer />"
            markdown={ReadMe}
          />
          <Markdown>
          {Example}
        </Markdown>
        </>
      },
    },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [snackbarConstants.SUCCESS,snackbarConstants.ERROR, snackbarConstants.WARNING],
      control: { type: 'radio' }
    }
  },
  args: {
    variant: snackbarConstants.SUCCESS,
    message: 'Snackbar message',
  }
};

export const SnackbarCanvas = (args) => {
  const [snackbar, setSnackbar] = useSnackbar();
  return (
    <SnackbarContainer snackbar={snackbar} setSnackbar={setSnackbar}>
      <Button
        onClick={() => setSnackbar({
          ...args,
          show: true
        })}
        label="Show snackbar"
        />
    </SnackbarContainer>
  );
}
