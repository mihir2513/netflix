import { Box, makeStyles, TextField } from "@material-ui/core";
import useStyle from "../SingForm/CustomeHook/useStyle";
import FormButton from "./FormButton";
const Form = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.formText}>
        Ready to watch? Enter your email to create or restart your membership.
      </Box>
      <Box className={classes.formWrapper}>
        {/* <TextField
          variant="outlined"
          color="secondary"
          focused
          className={classes.formEmail}
        ></TextField> */}
        <input className={classes.formEmail}></input>
        <FormButton className={classes.optformButton}/>
      </Box>
    </>
  );
};
export default Form;
