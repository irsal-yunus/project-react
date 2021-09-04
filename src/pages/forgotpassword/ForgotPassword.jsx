import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';


const Forgot_Password=({handleChange})=>{
    const paperStyle={padding : 20,height: '70vh', width:300, margin:"20px auto"}    
    const avatarStyle={justifyContent: 'center', display: 'flex'}
    const buttonStyle={margin: '1em auto', display: 'flex', justifyContent: 'center' }          
                        
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">                   
                    <Avatar src="avatar.jpg" style={avatarStyle}></Avatar>                                     
                    <Typography variant='caption'> Please enter your username and email to reset your password  </Typography>
                </Grid>
                <form>
                <TextField id="name" label="Username" placeholder="Enter Username" fullWidth required />   
                <TextField id="email" label="Email" placeholder="Enter Email" fullWidth required />                         
                <Button type="submit" color="primary" variant="contained" fullWidth style={buttonStyle}>Submit</Button>                
                <Typography align="center">
                    <Link to="/" onClick={()=>handleChange("event",0)} className="text-black-50">
                        Back To Login
                    </Link>
                </Typography>
                </form>              
            </Paper>
        </Grid>
    )
}

export default Forgot_Password;