import { Box, makeStyles, Typography } from "@material-ui/core";
import QuationList from "./QuationList";
import quations from "../../Data/fnq.json";
import QuationHeader from "./QuationHeader";
import QuationBody from "./QuationBody";
import Form from "../Form/Form";
const useStyle = makeStyles(() => ({
  quationsWrapper: {
    maxWidth: "815px",
    margin: "auto",
    padding: "70px 45px",
    display: "flex",
    flexDirection: "column",
  },
}));
const Quations = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.quationsWrapper}>
        <Typography variant="h1">Frequently Asked Questions</Typography>
        {quations.map((item) => (
          <QuationList key={item.id}>
            <QuationHeader>{item.header}</QuationHeader>
            <QuationBody>{item.body}</QuationBody>
          </QuationList>
        ))}
        <Form/>
      </Box>
    </>
  );
};
export default Quations;
