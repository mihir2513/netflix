import ContentItem from "./ContentItem";
import content from "../../Data/content.json";
import ContentTitle from "./ContentTitle";
import ContentSubTitle from "./ContentSubTitle";
import { Box, makeStyles } from "@material-ui/core";
import ContentImage from "./ContentImage";
import useStyle from "../SingForm/CustomeHook/useStyle";

const Content = () => {
  const classes = useStyle();
  return (
    <>
      {content.map((item, index) => (
        <ContentItem key={index}>
          <Box className={classes.textContent}>
            <ContentTitle className={classes.contentTitle}>
              {item.title}
            </ContentTitle>
            <ContentSubTitle className={classes.contentSubTitle}>
              {item.subTitle}
            </ContentSubTitle>
          </Box>
          <Box className={classes.textContent}>
            <ContentImage
              className={classes.ContentImage}
              src={item.image}
              alt={item.alt}
            />
          </Box>
        </ContentItem>
      ))}
    </>
  );
};
export default Content;
