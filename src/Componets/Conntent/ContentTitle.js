import { makeStyles, Typography } from "@material-ui/core";

const ContentTitle = (props) => {
  return (
    <>
      <br />
      <br />
      <br />
      <Typography {...props} variant="h1">
        {props.children}
      </Typography>
    </>
  );
};
export default ContentTitle;
