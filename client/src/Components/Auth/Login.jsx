import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import classnames from 'classnames';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard'); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeLogin = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  loginSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <section className="p-3 mb-2">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6">
              <div className="login-left">
                <h4 className="text-capitalize">
                  Login with your credentials to enjoy the Application services
                </h4>
              </div>
            </div> */}
            <div className="col-lg-6 mt-5 pt-5 ml-auto mr-auto">
              {/* <div className="login-right"> */}
              <div className="">
                <h1>Sign In</h1>
                <form noValidate onSubmit={this.loginSubmit}>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Email" class="form-label text-white">Email</label> <br />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        id="email"
                        value={email}
                        onChange={this.onChangeLogin}
                        error={errors.email}
                        // className={classnames('', {
                        //   invalid: errors.email || errors.emailNotFound
                        // })}
                      />{' '}
                      <br />
                      <span className="text-danger">
                        {errors.email}
                        {errors.emailNotFound}
                      </span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="Password" class="form-label text-white">Password</label> <br />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={this.onChangeLogin}
                        error={errors.password}
                        // className={classnames('', {
                        //   invalid: errors.password || errors.passwordIncorrect
                        // })}
                      />{' '}
                      <br />
                      <span className="text-danger">
                        {errors.password}
                        {errors.passwordIncorrect}
                      </span>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <button type="submit" className="btn btn-md btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                  <div class="form-row">
                    {/* <div class="form-group col-md-12">
                      <p>
                        Don't have an account ?
                        <Link to="/register" className="text-success">
                          Create one
                        </Link>
                      </p>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(Login);
