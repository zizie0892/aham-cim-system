import React, {useState} from 'react';
import axios from 'axios';
import CustomerForm from './CustomerForm';

const CreateCustomer = () => {
    const  [formValues, setFormValues] = useState({name: '', email: '', phone:''})

    const onSubmit = customerObject => {
        axios.post('http://localhost:3000/customers/create-customer',
        customerObject)
        .then(res => {
            if (res.status === 200)
                alert('Customer successfully created')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }

    return(
        <CustomerForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Create Customer
        </CustomerForm>
    )
};

export default CreateCustomer;