import { Markdown } from '@storybook/blocks';
import SnackBarContainer, { useSnackbar } from "../../components/Snackbar";
import ReadMe from './README.md?raw';
import Example from './Example.md?raw';
import Blocks from "../Blocks";
import { snackbarConstants } from "../../components/constants";
import Button from "../../components/Button";

export default {
  title: 'Components/SnackBar',
  component: SnackbarCanvas,
    parameters: {
      layout: 'centered',
      docs: {
        page: () => <>
          <Blocks
            componentName="<SnackBarContainer />"
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
    <SnackBarContainer snackbar={snackbar} setSnackbar={setSnackbar}>
      <Button
        onClick={() => setSnackbar({
          ...args,
          show: true
        })}
        label="Show snackbar"
        />
    </SnackBarContainer>
  );
}
