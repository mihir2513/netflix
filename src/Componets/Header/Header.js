import Logo from "./Logo";
import SingupButton from "./SignupButton";
import "./HeaderStyle.css";
import { Box, Button, Grid, IconButton, Toolbar } from "@material-ui/core";
import Form from "../Form/Form";
import useStyle from "../SingForm/CustomeHook/useStyle";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
const Header = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.home}>
        <Box className={classes.navbarHome}>
          <IconButton>
            <Logo className={classes.logo} />
          </IconButton>
          <Link to="/singin" style={{textDecoration:"none"}} >
            <SingupButton className={classes.Button} />
          </Link>
        </Box>
        <Box className={classes.wrapperHome}>
          <Box className={classes.titleHome}>
            Unlimited movies, TV shows and more.
          </Box>
        </Box>
        <Form />
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item container xs={12} >
            <Grid item xs={2}>
              <img className={classes.logo} src={logo}></img>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <Button className={classes.Button} variant="contained">singin</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
};
export default Header;
