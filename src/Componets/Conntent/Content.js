import ContentItem from "./ContentItem";
import content from "../../Data/content.json";
import ContentTitle from "./ContentTitle";
import ContentSubTitle from "./ContentSubTitle";
import { Box, makeStyles } from "@material-ui/core";
import ContentImage from "./ContentImage";
import Seprator from "../Seprator/Seprator";

const useStyle = makeStyles(() => ({
    textContent: {
        boxSizing: 'border-box',
    },  
    content:{
        boxSizing: 'border-box',
    },

  }));
const Content = () => {
    const classes=useStyle();
  return (
    <>
      {content.map((item ,index) => (
        
        <ContentItem key={index}>
            <Box className={classes.textContent}>
          <ContentTitle>{item.title}</ContentTitle>
          <ContentSubTitle>{item.subTitle}</ContentSubTitle>
          </Box>
          <Box className={classes.content}>
            <ContentImage src={item.image} alt={item.alt}/>
          </Box> 
        </ContentItem>
       
              
      ))}
      
    </>
  );
};
export default Content;
