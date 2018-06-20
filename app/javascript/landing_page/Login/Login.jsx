import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Error } from '../Error'

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
          dispatch(userActions.login(email, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (~
          %div
            {submitted && (!email || !password ) &&
              <Error message={"Invalid Email or password."} />
            }
            %h2
              Log in

            %form(name="form"
                  onSubmit={this.handleSubmit}
            )
              .field
                %label(htmlFor="email")
                  Email
                %br/
                %input#user_email.form-control(type="email" 
                                               name="email"
                                               autoFocus="autofocus"
                                               autoComplete="email"
                                               value={email}
                                               onChange={this.handleChange}
                )
              .field
                %label(htmlFor="password")
                  Password
                %br/
                %input#user_password.form-control(type="password"
                                                  name="password"
                                                  autoComplete="off"
                                                  value={password}
                                                  onChange={this.handleChange}
                )
              .actions
                %button(type="submit"
                        name="commit"
                        value="Log in"
                        class="btn btn-lg btn-dark"
                )
                  Log in

            .btn-group(role="group")
              %Link(to="/signup")
                .btn.btn-outline-dark
                  Sign up
        ~);
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login }; 