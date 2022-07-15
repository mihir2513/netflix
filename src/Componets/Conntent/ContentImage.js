import { Box, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  ContentImage: {
    maxWidth: "100%",
    height: "auto",
    
  },
}));
const ContentImage = (props) => {
  const classes = useStyle();
  return (
    <>
      <img className={classes.ContentImage} {...props} />
    </>
  );
};
export default ContentImage;
