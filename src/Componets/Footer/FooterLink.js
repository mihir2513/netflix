import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  link: {
    color: "#757575",
    marginBottom: "20px",
    fontSize: "13px",
  },
}));
const FooterLink = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.link}>{props.children}</Box>
    </>
  );
};
export default FooterLink;
