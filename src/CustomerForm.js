import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { FormGroup, Button } from "react-bootstrap";

const CustomerForm = (props) => {
    const validate = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('You have enter an invalide email address')
            .required('Required'),
        phone: Yup.number()
            .positive('Invalid phone number')
            .integer("Invalid phone number")
            .required('Required')
    });
    console.log(props);

    return(
        <div className='form-wrapper'>
            <Formik {...props} validationSchema={validate}>
                <Form>
                    <FormGroup style={{marginTop:'30px'}}>
                        Name:
                        <Field name='name' type='text' className='form-control'/>
                        <ErrorMessage 
                            name='name' 
                            className='d-block invalid-feedback' 
                            component='span' 
                        />
                    </FormGroup>
                    <FormGroup style={{marginTop:'30px'}}>
                        Email:
                        <Field name='email' type='text' className='form-control'/>
                        <ErrorMessage 
                            name='email' 
                            className='d-block invalid-feedback' 
                            component='span' 
                        />
                    </FormGroup>
                    <FormGroup style={{marginTop:'30px'}}>
                        Phone No.
                        <Field name='phone' type='text' className='form-control'/>
                        <ErrorMessage 
                            name='phone' 
                            className='d-block invalid-feedback' 
                            component='span' 
                        />
                    </FormGroup>
                    <Button variant='primary' size='lg' block='block' type='submit' style={{marginTop:'30px'}}>
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default CustomerForm;