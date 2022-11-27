import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import CustomerTableRow from './CustomerTableRow';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/customers/list-customer/')
            .then(({data}) => {
                setCustomers(data);
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const DataTable = () => {
        return customers.map((res, i) => {
            return <CustomerTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className='table-wrapper'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default CustomerList;