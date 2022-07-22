import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { createPost } from './service/signupapi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useInput from './CustomeHooks';


const usestyle = makeStyles({
    button: {
        background: 'blue',
        marginTop: '2%'
    },
    input: {
        width: '39%',
        marginLeft: '10px'
    },
    radio: {
        marginTop: '30px',
        marginLeft: '10px'
    },
    div: {
        width: '50%'
    },
    address: {
        
        width: '80%',
        marginLeft: '10px'
    },error: { color: "red", display: "inline" },



})
const isValidName = (value) => {
    var letters = /^[A-Za-z-]+$/;
    if (value.match(letters)
   && !(value.length < 3)) {
      return true;
    }
  };

  


const Signup = (props) => {
    const {
        enteredValue: firstNameValue,
        valueChnageHandler: firstNameValueChangeHandler,
        valueBlurHandler: firstNameValueBlurHandler,
        hasError: firstNameHasError,
        valueIsvalid: firstNameIsValid,
      } = useInput(isValidName);
   
    const [validator,setValidator]=useState(false);
        const [user,setUser]=useState({
        fname:'',
        lname:'',
        mobile:'',
        age:'',
        gender:'',
        state:'',
        distric:'',
        pincode:'',
        country:'',
        address:''

    });
    const {register,handleSubmit,control,formState:{errors}}=useForm();

    const inputevent=(e)=>{
          const {name ,value} = e.target;
          setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }

        });
        
        // var letters = /^[A-Za-z]+$/;
        // if (value.match(letters)) {
        //     return setValidator(false);
        //   } else {
        //     return setValidator(true);
        //   }
     
    }
    const navigate=useNavigate(); 
    const onsubmit=async(data)=>{
        console.log(data);
        // console.log(user);
        //  await createPost(user).then((res)=>console.log(res)).catch((error)=>{console.log(error)});
        //  props.onsclose();
       
    }
    const classes = usestyle();
    return (
        <>
        
            <div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h1>signup form</h1>
                    <form>
                    
                    <TextField
                         
                        id="outlined-required"
                        label="First Name"
                        className={classes.input}
                       
                        name='fname'
                        {...register("fname", { 
                            required: "First Name is required.",
                            pattern: {
                                value: /^[A-Za-z-]+$/,
                                message: "plese enter only name",
                              },
                             })}
                        error={Boolean(errors.fname)}
                        helperText={errors.fname?.message}
                    
                                
                    />
                
                    
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        className={classes.input}
                        name='lname'
                        {...register("lname", {
                             required: "last Name is required.",
                             pattern: {
                                value: /^[A-Za-z-]+$/,
                                message: "plese enter only name",
                              }, })}
                        error={Boolean(errors.lname)}
                        helperText={errors.lname?.message}
                       
                        
                    /><br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Mobile Number"
                        className={classes.input}
                        type='number'
                        name='mobile'
                        {...register("mobile", { 
                            required: "mobile  no is required.",
                           
                            pattern: {
                                value:  /^\d{10}$/,
                                message: "plese enter only ten digit",
                              },
                        })}
                        error={Boolean(errors.mobile)}
                        helperText={errors.mobile?.message}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="age"
                        type='number'
                        className={classes.input}
                        name='age'
                        {...register("age", { 
                            required: "age is required.",
                            pattern: {
                                value: /^[1-9][0-9]?$|^100$/,
                                message: "plese valide age",
                              },
                        })}
                        error={Boolean(errors.age)}
                        helperText={errors.age?.message}
                    /><br />
                        
                        <FormControl error={Boolean(errors.gender)}>
            <FormLabel style={{marginTop:'20px'}}>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender" className={classes.text}>
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Other"
              />
            </RadioGroup>
          </FormControl>
                        
                        <TextField
                            required
                            id="outlined-required"
                            label="address"
                            className={classes.address}
                            name='address'
                            {...register("address", { required: "address is required." })}
                            error={Boolean(errors.address)}
                            helperText={errors.address?.message}

                        />
                         
                         <TextField
                            required
                            id="outlined-required"
                            label="email"
                            className={classes.address}
                            name='email'
                            {...register("email", { required: "email is required.",
                            pattern: {
                                value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: "plese enter valide email",
                              },
                         })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}

                        />
                    
                    <TextField
                        required
                        id="outlined-required"
                        label="state"
                        className={classes.input}
                        name='state'
                        {...register("state", { required: "state is required." })}
                        error={Boolean(errors.state)}
                        helperText={errors.state?.message}

                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="distric"
                        className={classes.input}
                        name='distric'
                        {...register("distric", { required: "distric Name is required." })}
                        error={Boolean(errors.distric)}
                        helperText={errors.distric?.message}


                    /><br/>
                    <FormControl  variant="standard" sx={{ m: 1, minWidth: 120 }} className={classes.input}  >
                        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Country"
                            name='country'
                            value={user.country} 
                            onChange={inputevent}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='india'>india</MenuItem>
                            <MenuItem value='us'>us</MenuItem>
                            <MenuItem value='japan'>japan</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        required
                        id="outlined-required"
                        label="pincode"
                        className={classes.input}
                        name='pincode'
                        {...register("pincode", { 
                            
                            required: "pincode is required.",
                            maxLength:{
                                value:6,
                                message:'enter only 6 digit'
                            },
                            minLength :{
                                value:6,
                                message:'enter only 6 digit'
                            }
                         })}
                        error={Boolean(errors.pincode)}
                        helperText={errors.pincode?.message}

                    />
                   <Button  variant="contained" className={classes.button} type='submit'onClick={handleSubmit(onsubmit)} style={{width:'30%',marginLeft:'25%',marginTop:'10px'}}>Submit</Button>
                   </form>
                </Box>

             
            
            </div>
         
        </>
    );
}
export default Signup;