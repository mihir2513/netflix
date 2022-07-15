import { makeStyles, Typography } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  title: {
    fontSize: "3rem",
    lineHeight: "1.1",
    marginBottom: "8px",
    paddingRight: "100px",
    color:'#fff',
  },
}));
const ContentTitle = (props) => {
  const classes = useStyle();
  return (
    <><br/><br/><br/>
      <Typography className={classes.title} variant="h1">
        {props.children}
      </Typography>
    </>
  );
};
export default ContentTitle;
