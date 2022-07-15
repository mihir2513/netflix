import Logo from "./Logo";
import SingupButton from "./SignupButton";
import "./HeaderStyle.css";
import { Box, Button, IconButton, Toolbar } from "@material-ui/core";
import Form from "../Form/Form";
import useStyle from "../SingForm/CustomeHook/useStyle";
import { Link } from "react-router-dom";
const Header = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.home}>
        <Box className={classes.navbarHome}>
          <IconButton>
            <Logo className={classes.logo} />
          </IconButton>
          <Link to="/singin">
            <SingupButton className={classes.Button}/>
          </Link>
        </Box>
        <Box className={classes.wrapperHome}>
          <Box className={classes.titleHome}>
            Unlimited movies, TV shows and more.
          </Box>
        </Box>
        <Form />
      </Box>
    </>
  );
};
export default Header;
