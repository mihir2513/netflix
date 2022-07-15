import { Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import QuationContext from "./QuationContext";
const useStyle = makeStyles(() => ({
  qBody: {
    background: "#303030",
    fontSize: "26px",
    fontWeight: "normal",
    padding: "0.8em 1.2em 0.8em 1.2em",
  },
}));
const QuationBody = (props) => {
  const [show, setShow] = useContext(QuationContext);
  const classes = useStyle();
  return (
    <>{show ? <Box className={classes.qBody}>{props.children}</Box> : null}</>
  );
};
export default QuationBody;
