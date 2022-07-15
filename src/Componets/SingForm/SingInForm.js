import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyle from "./CustomeHook/useStyle";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Header/Logo";
import { useForm } from "react-hook-form";
import axios, { Axios } from "axios";
const SingInForm = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const userList=[]
  const onsubmit = async (data) => {
    console.log(data);
    const getData = await axios.get(
      "https://react-new-290bd-default-rtdb.firebaseio.com/data/id.json"
    );
    console.log(getData);
    for(let key in getData){
        userList.push(getData.data)
    }
    
console.log(userList[0])
    // navigate("/");
  };

  return (
    <>
      <Box className={classes.home}>
        <Box className={classes.navBar}>
          <IconButton>
            <Logo className={classes.logo} />
          </IconButton>
        </Box>
        <Box className={classes.wrapper}>
          <form className={classes.base}>
            <Typography className={classes.input} variant="h3">
              Sign In
            </Typography>
            <TextField
              className={classes.input}
              type="text"
              placeholder="Email"
              {...register("Email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "plese enter valid email",
                },
              })}
              error={Boolean(errors.Email)}
              helperText={errors.Email?.message}
            />
            <TextField
              className={classes.input}
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: "Password is required.",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message: "plese enter valid password",
                },
              })}
              error={Boolean(errors.Password)}
              helperText={errors.Password?.message}
              autoComplete="off"
            />
            <Button className={classes.Button} onClick={handleSubmit(onsubmit)}>
              Sign In
            </Button>
            <Typography className={classes.text} variant="h6">
              No have Account?
              <Link className={classes.link} to="/singup">
                Sing Up
              </Link>
            </Typography>
          </form>
        </Box>
      </Box>
    </>
  );
};
export default SingInForm;
