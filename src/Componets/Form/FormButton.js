import { Box, Button, makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const FormButton = (props) => {

  return (
    <>
      <Button {...props}>
        Get Started <ArrowForwardIosIcon />
      </Button>
    </>
  );
};
export default FormButton;
