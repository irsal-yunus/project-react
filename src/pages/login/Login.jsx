import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{
    const paperStyle={padding : 20,height: '70vh', width:280, margin:"20px auto"}    
    const avatarStyle={justifyContent: 'center', display: 'flex'}
    const marginTop={marginTop: 5}
    const buttonStyle={margin: '1em auto', display: 'flex', justifyContent: 'center' }   
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">                   
                    <Avatar src="avatar.jpg" style={avatarStyle}></Avatar>                                     
                    <Typography variant='caption'> Sign in to your account to continue </Typography>
                </Grid>
                <form>
                <TextField id="email" label="Email Address" placeholder="Enter Email" fullWidth required />   
                <TextField id="password" type="password" label="Password" placeholder="Enter Password" fullWidth required /> 
                <FormControlLabel 
                    control={
                        <Checkbox                            
                            name="checkedB"
                            color="primary"
                            style={marginTop}                          
                        />
                    }
                    label="Remember Me"
                />
                <Button type="submit" color="primary" variant="contained" fullWidth style={buttonStyle} >Sign In</Button>
                <Typography align="center">
                    <Link to="forgotpassword" className="text-black-50">
                        Forgot Password ?
                    </Link>
                </Typography>
                <Typography variant='caption'>
                Do you have an account ?
                    <Link to="register" className="text-black-50">
                        Sign Up ?
                    </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;