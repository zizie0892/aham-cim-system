import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CustomerForm from './CustomerForm';

const EditCustomer = (props) => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const onSubmit = (customerObject) => {
        axios
            .put(
                'http://localhost:3000/customers/update-customer/' +
                props.match.params.id,
                customerObject
            )
            .then((res) => {
                if(res.status === 200){
                    alert('Customer successfully updated');
                    props.history.push('/customer-list');
                } else Promise.reject();
            })
            .catch((err) => alert('Something went wrong'))
    };

    useEffect(() => {
        axios 
            .get(
                'http://localhost:3000/customers/update-customer/' +
                props.match.params.id
            )
            .then((res) => {
                const {name, email, phone} = res.data;
                setFormValues({name, email, phone})
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <CustomerForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Update Customer
        </CustomerForm>
    )
}

export default EditCustomer;