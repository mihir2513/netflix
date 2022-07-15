import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  clm: {
    display: "flex",
    flexDirection: "column",
  },
}));
const FooterColm = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.clm}>{props.children}</Box>
    </>
  );
};
export default FooterColm;
