import { Box, makeStyles } from "@material-ui/core";
import FooterColm from "./FooterColm";
import FooterLink from "./FooterLink";
import FooterRaw from "./FooterRaw";
const useStyle = makeStyles(() => ({
  title: {
    fontSize: "16px",
    color: "#757575",
    marginBottom: "50px",
  },
  wrapper:{
    maxWidth: '1000px',
    margin: 'auto',
    padding: '70px 56px',
  }
}));
const Footer = () => {
  const classes = useStyle();
  return (
    <>
    <Box className={classes.wrapper}>
      <Box className={classes.title}>Questions? Contact us.</Box>
      <FooterRaw>
        <FooterColm>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Investor Relations</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Speed Test</FooterLink>
        </FooterColm>
        <FooterColm>
          <FooterLink>Help Center</FooterLink>
          <FooterLink>Jobs</FooterLink>
          <FooterLink>Cookie Preferences</FooterLink>
          <FooterLink>Legal Notices</FooterLink>
        </FooterColm>
        <FooterColm>
          <FooterLink>Account</FooterLink>
          <FooterLink>Ways to Watch</FooterLink>
          <FooterLink>Corporate Information</FooterLink>
          <FooterLink>Netflix Originals</FooterLink>
        </FooterColm>
        <FooterColm>
          <FooterLink>Media Center</FooterLink>
          <FooterLink>Terms of Use</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterColm>
      </FooterRaw>
      </Box>
    </>
  );
};
export default Footer;
