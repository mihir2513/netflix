import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  
}));
const ContentSubTitle = (props) => {
  const classes = useStyle();
  return (
    <>
      <Typography {...props} variant="h2">
        {props.children}
      </Typography>
    </>
  );
};
export default ContentSubTitle;
