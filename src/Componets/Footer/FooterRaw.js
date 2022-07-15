import { Box, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  raw: {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
}));
const FooterRaw = (props) => {
    const classes=useStyle();
  return (
    <>
      <Box className={classes.raw}>{props.children}</Box>
    </>
  );
};
export default FooterRaw;
