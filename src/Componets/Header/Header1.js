import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header1 = () => {
  return (
    <>
      {/* <Grid container direction="column">
        <Grid item xs={12} md={12} container spacing={1} style={{background:"#2874f0"}}>
          <Grid item xs={2} md={2}></Grid>
          <Grid item xs={1} md={1}>
            FlipKart
          </Grid>
          <Grid item xs={2} md={2}>
            <TextField
              style={{ background: "white" }}
              type="search"
              placeholder="Search"
            ></TextField>
          </Grid>
          <Grid item xs={1} md={1} >
            <Button variant="contained">Login</Button>
          </Grid>
          <Grid item xs={1} md={1}>
            <Typography variant="subtitle1">Become a Seller</Typography>
          </Grid>
          <Grid item xs={1} md={1}>
            More
          </Grid>
          <Grid item xs={2} md={2}>
                <ShoppingCartIcon/>Cart
          </Grid>
        </Grid>
      </Grid> */}
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography>FlipKart</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header1;
