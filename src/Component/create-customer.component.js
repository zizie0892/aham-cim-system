import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateCustomer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const saveCustomer = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/customers/', {
                name, email, phone
            });
            navigate('/');
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='columns mt-5'>
            <div className='column is-half'>
                <form onSubmit={saveCustomer}>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                            <input  
                            type='text' 
                            className='input' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control'>
                            <input  
                            type='text' 
                            className='input' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Phone No</label>
                        <div className='control'>
                            <input  
                            type='number' 
                            className='input' 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Phone No'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <button type='submit' className='button is-success'>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default CreateCustomer;