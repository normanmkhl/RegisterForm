import React, { Component } from 'react';
import './Auth.css';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import classnames from 'classnames';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';
// import FormContainer from '../components/FormContainer';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeRegister = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  registerSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors, name, password, password2, email } = this.state;
    return (
      <section className="register p-3 mb-2 ">
        <div className="container ">
          <div className="row">
            {/* <div className="col-lg-6">
              <div className="signup-left">
                <h4 className="text-capitalize">
                  To Register With Our Application You should must Put Your Own
                  mongoURI Id in the <kbd>config/default.json</kbd>
                </h4>
              </div>
            </div> */}
            <div className="col-lg-6 mt-5 pt-5 ml-auto mr-auto">
              {/* <div className="signup-right"> */}
              <div className="">

                <h1>Sign Up</h1>
                <form noValidate onSubmit={this.registerSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="name" class="form-label text-white">Full Name</label> <br />
                      <input
                        type="text"
                        // className="form-control"
                        class="form-control"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={this.onChangeRegister}
                        error={errors.name}
                        // className={classnames('', {
                        //   invalid: errors.name
                        // })}
                        // required
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.name}</span>
                    </div>


                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Email" class="form-label text-white">Email</label> <br />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={this.onChangeRegister}
                        error={errors.email}
                        // className={classnames('', {
                        //   invalid: errors.email
                        // })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.email}</span>
                    </div>

            


                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Password" class="form-label text-white">Password</label> <br />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={this.onChangeRegister}
                        error={errors.password}
                        // className={classnames('', {
                        //   invalid: errors.password
                        // })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.password}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Confirm Password" class="form-label text-white">Confirm Password</label>
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        id="password2"
                        value={password2}
                        onChange={this.onChangeRegister}
                        error={errors.password2}
                        // className={classnames('', {
                        //   invalid: errors.password2
                        // })}
                      />{' '}
                      <br />
                      <span className="text-danger">{errors.password2}</span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-primary">
                        Register
                      </button>
                    </div>
                  </div>
                  {/* <div class="form-row">
                    <div class="form-group col-md-12">
                      <p>
                        Already have an account ?
                        <Link to="/login" className="text-success">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      // <Container>
      //       <Row className='justify-content-md-center'>
      //           <Col xs={12} md={6}>
      //           <br /><br /><br />
      //           <h1>Sign Up</h1>
      //             {/* {message && <Message variant='danger'>{message}</Message>} */}
      //             <form noValidate onSubmit={this.registerSubmit}>
      //               <Form.Group controlId='email'>
      //                 <Form.Label>Email Address</Form.Label>
      //                 <Form.Text className="text-danger">{errors.email}</Form.Text>
      //                 <Form.Control
      //                   // type='email'
      //                   // placeholder='Email'
      //                   // value={email}
      //                   // onChange={this.onChangeRegister}                    
      //                   type="email"
      //                   className="input-control"
      //                   placeholder="Enter your email"
      //                   id="email"
      //                   value={email}
      //                   onChange={this.onChangeRegister}
      //                   error={errors.email}
      //                   className={classnames('', {
      //                     invalid: errors.email
      //                   })}
      //                 >
      //                 </Form.Control>
      //               </Form.Group>

      //               <Form.Group controlId='password'>
      //                 <Form.Label>Password</Form.Label>
      //                 <Form.Text className="text-danger">{errors.password}</Form.Text>
      //                 <Form.Control
      //                   // type='password'
      //                   // placeholder='Password'
      //                   // value={password}
      //                   // onChange={this.onChangeRegister}
                        
      //                   type="password"
      //                   className="input-control"
      //                   placeholder="Enter your password"
      //                   id="password"
      //                   value={password}
      //                   onChange={this.onChangeRegister}
      //                   error={errors.password}
      //                   className={classnames('', {
      //                     invalid: errors.password
      //                   })}
      //                 ></Form.Control>
      //               </Form.Group>

      //               <Form.Group controlId='confirmPassword'>
      //                 <Form.Label>Confirm Password</Form.Label>
      //                 <Form.Text className="text-danger">{errors.password2}</Form.Text>
      //                 <Form.Control
      //                   // type='password'
      //                   // placeholder='Confirm Password'
      //                   // value={password}
      //                   // onChange={this.onChangeRegister}
                        
      //                   type="password"
      //                   className="input-control"
      //                   placeholder="Confirm your password"
      //                   id="password2"
      //                   value={password2}
      //                   onChange={this.onChangeRegister}
      //                   error={errors.password2}
      //                   className={classnames('', {
      //                     invalid: errors.password2
      //                   })}
                     
      //                 ></Form.Control>
      //               </Form.Group>

      //               <Button type='submit' variant='primary' style={{ margin: '15px 0px' }}>
      //                 Register
      //               </Button>
      //             </form>
      //           </Col>
      //       </Row>
      // </Container>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
