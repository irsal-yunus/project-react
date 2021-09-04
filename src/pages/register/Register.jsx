import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button, Divider } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


 

const Register=({handleChange})=>{
    const paperStyle={padding : 20,height: '80vh', width:300, margin:"20px auto"}    
    const avatarStyle={justifyContent: 'center', display: 'flex'}
    //const checboxStyle={margin:"20px auto"}
    const marginTop={marginTop: 5}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">                   
                    <Avatar src="avatar.jpg" style={avatarStyle}></Avatar>                                     
                    <Typography variant='caption'> Please fill this form to create an account </Typography>
                </Grid>
                <form>
                <TextField id="name" label="Name" placeholder="Enter Name" fullWidth required />  
                <TextField id="email" label="Email" placeholder="Enter Email" fullWidth required /> 
                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <TextField id="phone" label="Phone Number" placeholder="Enter Phone" fullWidth required />
                <TextField id="password" type="password" label="Password" placeholder="Enter Password" fullWidth required />
                <TextField id="confirm_password" type="password" label="Confirm Password" placeholder="Enter Confirm Password" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox                            
                            name="checkedB"
                            color="primary"
                            //style={checboxStyle}
                        />
                    }
                    label="I accept the terms and conditions"
                />
                <Button type="submit" color="primary" variant="contained" fullWidth >Sign Up</Button> 
                <Divider variant="middle" />
                    <Typography align="center">
                        <Link to="/" onClick={()=>handleChange("event",0)} className="text-black-50">
                            Already Have an Account 
                        </Link>
                    </Typography>
                </form>             
            </Paper>
        </Grid>
    )
}

export default Register;