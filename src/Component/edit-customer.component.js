import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCustomer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getCustomerById();
    }, []);

    const getCustomerById = async () => {
        const response = await axios.get(`http://localhost:5000/customers/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
    };

    const updateCustomer = async (e) => {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/customers/${id}`, {
                name, email, phone
            });
            navigate('/');
        }catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='columns mt-5'>
            <div className='column is-half'>
                <form onSubmit={updateCustomer}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Phone No</label>
                        <div className="control">
                            <input
                                type="number"
                                className="input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone No"
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <button type="submit" className='button is-success'>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default EditCustomer;