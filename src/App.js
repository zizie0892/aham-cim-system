import React from 'react';
import { Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import CreateCustomer from './Component/create-customer.component';
import EditCustomer from './Component/edit-customer.component';
import CustomerList from './Component/customer-list.component';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/'} className='nav-link'>
                  AHAM CIM System
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <div className='container is-widescreen'>
          <Routes>
              <Route exact path='/' element={<CustomerList />} />
              <Route  path='add' element={<CreateCustomer />} />
              <Route path='/edit/:id' element={<EditCustomer />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
