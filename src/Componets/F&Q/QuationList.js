import { Box, makeStyles } from "@material-ui/core";
import { useState } from "react";
import QuationContext from "./QuationContext";
const useStyle = makeStyles(() => ({
  list: {
    marginBottom: "10px",
  },
}));
const QuationList = (props) => {
  const classes = useStyle();
  const [show, setShow] = useState(false);
  return (
    <>
      <QuationContext.Provider value={[show, setShow]} {...props}>
        <Box className={classes.list}>{props.children}</Box>
      </QuationContext.Provider>
    </>
  );
};
export default QuationList;
