import React from 'react';
import {Nav, Navbar, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import CreateCustomer from './create-customer.component';
import EditCustomer from './edit-customer.component';
import CustomerList from './customer-list.component';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-customer'} className='nav-link'>
                  AHAM CIM System
                </Link>
              </Navbar.Brand>

              <Nav className='justify-content-end'>
                <Nav>
                  <Link to='/create-customer' className='nav-link'>
                    Create Customer
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/customer-list'} className='nav-link'>
                    Customer List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div clasName='wrapper'>
                <Routes >
                  <Route exact path='/' element={<CreateCustomer />} />
                  <Route  path='/create-customer' element={<CreateCustomer />}/>
                  <Route path='/edit-customer/:id' element={<EditCustomer />}/>
                  <Route path='/customer-list' element={<CustomerList />}/>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  )
}

export default App;
