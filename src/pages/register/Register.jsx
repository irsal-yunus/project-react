import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button, Divider } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Form, Formik, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

 

const Register=({handleChange})=>{
    const paperStyle={padding : 20,height: '100vh', width:300, margin:"20px auto"}    
    const avatarStyle={justifyContent: 'center', display: 'flex'}
    //const checboxStyle={margin:"20px auto"}
    const marginTop={marginTop: 5}
    const buttonStyle={margin: '1em auto', display: 'flex', justifyContent: 'center' }  
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 
    const initialValues={
        name:'',
        email:'',
        gender:false,
        phone:'',
        password:'',
        confirm_password:'',
        conditions:false
    }

    const validationSchema=Yup.object().shape({
        name:Yup.string().required("required"),
        email:Yup.string().email('please enter valid email').required("required"),
        phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        password:Yup.string().required('required'),
        confirm_password:Yup.string().required('required')
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
                    <Typography variant='caption'> Please fill this form to create an account </Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props)=>(
                    <Form>
                        <Field as={TextField} name="name" label="Name" placeholder="Enter Name" fullWidth 
                        helperText={<ErrorMessage name="name" />} />  
                        <Field as={TextField} name="email" label="Email" placeholder="Enter Email" fullWidth
                        helperText={<ErrorMessage name="email" />}  /> 
                        <Field as={FormControl} component="fieldset" style={marginTop} >
                        <Field as={FormLabel} component="legend">Gender</Field>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </Field>                      
                        <Field as={TextField} name="phone" label="Phone Number" placeholder="Enter Phone" fullWidth 
                        helperText={<ErrorMessage name="phone" />} />
                        <Field as={TextField} name="password" type="password" label="Password" placeholder="Enter Password" fullWidth 
                        helperText={<ErrorMessage name="password" />} />
                        <Field as={TextField} name="confirm_password" type="password" label="Confirm Password" placeholder="Enter Confirm Password" fullWidth 
                        helperText={<ErrorMessage name="confirm_password" />} />
                        <Field as={FormControlLabel}
                        name='conditions'
                            control={
                                <Checkbox                            
                                    color="primary"                                    
                                />
                            }
                            label="I accept the terms and conditions"
                        />
                        <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting} 
                        fullWidth style={buttonStyle} >{props.isSubmitting?"Loading":"Sign Up"}</Button>
                    </Form>
                     )}
                </Formik>
                 
                <Divider variant="middle" />
                    <Typography align="center">
                        <Link to="/" onClick={()=>handleChange("event",0)} className="text-black-50">
                            Already Have an Account 
                        </Link>
                    </Typography>                             
            </Paper>
        </Grid>
    )
}

export default Register;