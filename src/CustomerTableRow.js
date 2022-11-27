import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const CustomerTableRow = (props) => {
    const {_id, name, email, phone} = props.obj;

    const deleteCustomer = () => {
        axios
            .delete('http://localhost:3000/customers/delete-customer' + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert('Customer successfully deleted');
                    window.location.reload();
                }else Promise.reject();
            })
            .catch((err) => alert('Something went wrong'))
    };

    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                <Link className='edit-link' to={'/edit-customer' + _id}>
                    Edit
                </Link>
                <Button onClick={deleteCustomer} size='sm' variant='danger'>
                    Delete
                </Button>
            </td>
        </tr>
    );
}

export default CustomerTableRow;