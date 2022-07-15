import { Box, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import QuationContext from "./QuationContext";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
const useStyle = makeStyles(() => ({
  header: {
    background: "#303030",
    fontSize: "26px",
    fontWeight: "normal",
    padding: "0.8em 1.2em 0.8em 1.2em",
    marginBottom: "1px",
    cursor: "pointer",
  },
  icon: {
    filter: "brightness(0) invert(1)",
    width: "24px",
    float: "right",
  },
}));
const QuationHeader = (props) => {
  const [show, setShow] = useContext(QuationContext);
  const classes = useStyle();
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <Box className={classes.header} onClick={handleShow}>
        {props.children}
        {show ? (
          <CloseIcon className={classes.icon} />
        ) : (
          <AddIcon className={classes.icon} />
        )}
      </Box>
    </>
  );
};
export default QuationHeader;
