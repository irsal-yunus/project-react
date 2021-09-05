import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const Forgot_Password=({handleChange})=>{
    const paperStyle={padding : 20,height: '70vh', width:300, margin:"20px auto"}    
    const avatarStyle={justifyContent: 'center', display: 'flex'}
    const buttonStyle={margin: '1em auto', display: 'flex', justifyContent: 'center' }
    
    const initialValues={
        name:'',
        email:''        
    }

    const validationSchema=Yup.object().shape({
        name:Yup.string().required('required'),
        email:Yup.string().email('please enter valid email').required("required")
        
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
                    <Typography variant='caption'> Please enter your username and email to reset your password  </Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props)=>(
                    <Form>
                        <Field as={TextField} name="name" label="Username" placeholder="Enter Username" fullWidth 
                         helperText={<ErrorMessage name="name" />} />   
                        <Field as={TextField} name="email" label="Email" placeholder="Enter Email" fullWidth 
                         helperText={<ErrorMessage name="email" />} />                         
                        <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting}
                        fullWidth style={buttonStyle}>{props.isSubmitting?"Loading":"Submit"}</Button>
                    </Form>  
                    )}  
                </Formik>                                
                <Typography align="center">
                    <Link to="/" onClick={()=>handleChange("event",0)} className="text-black-50">
                        Back To Login
                    </Link>
                </Typography>                            
            </Paper>
        </Grid>
    )
}

export default Forgot_Password;