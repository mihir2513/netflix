import { Box } from "@material-ui/core";

const ContentItem = (props) => {
  return (
    <>
      <Box {...props}>{props.children}</Box>
    </>
  );
};
export default ContentItem;
