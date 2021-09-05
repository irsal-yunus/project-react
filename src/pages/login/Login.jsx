import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Login=({handleChange})=>{
    const paperStyle={padding : 20,height: '70vh', width:300, margin:"20px auto"}    
    const avatarStyle={justifyContent: 'center', display: 'flex'}
    const marginTop={marginTop: 5}
    const buttonStyle={margin: '1em auto', display: 'flex', justifyContent: 'center' }   
    const initialValues={
        email:'',
        password:'',
        remember:false
    }

    const validationSchema=Yup.object().shape({
        email:Yup.string().email('please enter valid email').required("required"),
        password:Yup.string().required('required')
    })
    const onSubmit=(values,props)=>{
        console.log(values)
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)

        console.log(props)
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">                   
                    <Avatar src="avatar.jpg" style={avatarStyle}></Avatar>                                     
                    <Typography variant='caption'> Sign in to your account to continue </Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props)=>(
                        <Form>
                            
                            <Field as={TextField} name="email" label="Email Address" placeholder="Enter Email" fullWidth 
                            helperText={<ErrorMessage name="email" />} />   
                            <Field as={TextField} name="password" type="password" label="Password" placeholder="Enter Password" fullWidth 
                            helperText={<ErrorMessage name="password" />} /> 
                            <Field as={FormControlLabel} 
                                name='remember'
                                control={
                                    <Checkbox                                       
                                        color="primary"
                                        style={marginTop}                          
                                    />
                                }
                                label="Remember Me"
                            />
                            <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting} 
                            fullWidth style={buttonStyle} >{props.isSubmitting?"Loading":"Sign In"}</Button>
                               
                        </Form>
                    )}
                </Formik>                
                <Typography align="center">
                    <Link to="forgotpassword" onClick={()=>handleChange("event",2)} className="text-black-50">
                        Forgot Password ?
                    </Link>
                </Typography>
                <Typography variant='caption'>
                Do you have an account ?
                    <Link to="register" onClick={()=>handleChange("event",1)} className="text-black-50">
                        Sign Up ?
                    </Link>
                </Typography>                
            </Paper>
        </Grid>
    )
}

export default Login;