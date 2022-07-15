import { Box, makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  
}));
const ContentItem = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box {...props} >
        {props.children}hjdgfhidgsy
      </Box>
    </>
  );
};
export default ContentItem;
