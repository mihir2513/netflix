import { Box, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  ContentItem: {
    padding: "70px 5%",
    maxWidth: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "flex-end",
    borderBottom: '4px solid #222',
  },
}));
const ContentItem = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.ContentItem}>
        {props.children}
      </Box>
    </>
  );
};
export default ContentItem;
