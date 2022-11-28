import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);


    const getCustomers = async() => {
     const response = await axios.get('http://localhost:5000/customers');
     setCustomer(response.data);
    };

    const deleteCustomer = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/customers/${id}`);
            getCustomers();
        }catch (error){
            console.log(error);
        }
    };

    return(
        <div className='columns mt-5'>
            <div className='column is-fullwidth'>
                <Link to='add' className='button is-success'>
                    Add New
                </Link>
                <table className='table is-striped is-fullwidth mt-2'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={customer._id}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>
                                    <Link to={`edit/${customer._id}`} className="button is-info is-small mr-1">
                                        edit
                                    </Link>
                                    <button onClick={() => deleteCustomer(customer._id)} className='button is-danger is-small'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};


export default CustomerList;