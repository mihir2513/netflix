import { Box, Button, makeStyles } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyle = makeStyles(() => ({
  button: {
    background: "#e50914",
    color: "#fff",
    width: "fit-content",
    height: "60px",
    textTransform: "uppercase",
    padding: "0 32px",
    fontSize: "26px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
}));
const FormButton = () => {
  const classes = useStyle();
  return (
    <>
      <Button className={classes.button}>
        Get Started <ArrowForwardIosIcon />
      </Button>
    </>
  );
};
export default FormButton;
