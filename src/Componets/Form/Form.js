import { Box, makeStyles, TextField } from "@material-ui/core";
import FormButton from "./FormButton";
const useStyle = makeStyles(() => ({
  email: {
    maxWidth: "450px",
    width: "100%",
    border: "1",
    borderColor: "white",
    padding: "10px",
    height: "1.1876em",
    fontSize: "20px",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "70px",
    padding: "0 20px",
  },
  text: {
    fontSize: "19px",
    color: "#fff",
    textAlign: "center",
    padding: "0 20px",
  },
}));
const Form = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.text}>
        Ready to watch? Enter your email to create or restart your membership.
      </Box>
      <Box className={classes.wrapper}>
        <TextField
          variant="outlined"
          color="secondary"
          focused
          className={classes.email}
        ></TextField>
        <FormButton></FormButton>
      </Box>
    </>
  );
};
export default Form;
