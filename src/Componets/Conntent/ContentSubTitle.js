import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  subTitle: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    lineHeight: "normal",
    paddingRight: "100px",
    color:'#fff',
  },
}));
const ContentSubTitle = (props) => {
  const classes = useStyle();
  return (
    <>
      <Typography className={classes.subTitle} variant="h2">
        {props.children}
      </Typography>
    </>
  );
};
export default ContentSubTitle;
