import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Error } from '../Error';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
            	id: this.props.user.id,
                first_name: this.props.user.first_name || '',
                last_name: this.props.user.last_name || '',
                country: this.props.user.country || '',
                city: this.props.user.city || '',
                phone: this.props.user.phone || '',
                facebook_url: this.props.user.facebook_url || '',
                linkedin_url: this.props.user.linkedin_url || '',
                birthdate: this.props.user.birthdate || '',
                birth_country: this.props.user.birth_country || '',
                email: this.props.user.email || ''
            },
            errors: {
              first_name: '',
              last_name: '',
              email: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user, errors } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
            errors: {
              ...errors,
              [name]: this.validateField(name, value)
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user, errors } = this.state;
        const { dispatch, authentication } = this.props;

        this.setState({submitted: true,
            errors: {
              first_name: this.validateField('first_name', user.first_name),
              last_name: this.validateField('last_name', user.last_name),
              email: this.validateField('email', user.email),
            }});
        if (!this.validateField('first_name', user.first_name) && !this.validateField('last_name', user.last_name) && !this.validateField('email', user.email)) {
            dispatch(userActions.update(user, authentication.user.data));
        }
    }

    validateField(name, value) {
      switch (name) {
        case 'first_name':
          return value ? '' : "First name can't be blank";
        case 'last_name':
          return value ? '' : "Last name can't be blank";
        case 'email':
          return value ? '' : "Email can't be blank";
       default:
          return '';
      }
    }

    render() {
        const { user, errors, submitted } = this.state;
        return (~
          %div
            %h1
              Editing user
            .row
              .col
                %form(name="form" onSubmit={this.handleSubmit})

                  %Error(error={errors.email})
                  %Error(error={errors.first_name})
                  %Error(error={errors.last_name})

                  %div(class={'field form-group' + ( errors.first_name ? ' field_with_errors' : '' ) })
                    %input( type="text" class="form-control" name="first_name" value={user.first_name} onChange={this.handleChange} placeholder="First name" )
                  %div(class={'field form-group' + ( errors.last_name ? ' field_with_errors' : '' ) })
                    %input( type="text" class="form-control" name="last_name" value={user.last_name} onChange={this.handleChange} placeholder="Last name" )
                  .field.form-group
                    %input( type="text" class="form-control" name="country" value={user.country} onChange={this.handleChange} placeholder="Country" )
                  .field.form-group
                    %input( type="text" class="form-control" name="city" value={user.city} onChange={this.handleChange} placeholder="City" )
                  .field.form-group
                    %input( type="text" class="form-control" name="phone" value={user.phone} onChange={this.handleChange} placeholder="Phone" )
                  .field.form-group
                    %input( type="text" class="form-control" name="facebook_url" value={user.facebook_url} onChange={this.handleChange} placeholder="Facebook URL" )
                  .field.form-group
                    %input( type="text" class="form-control" name="linkedin_url" value={user.linkedin_url} onChange={this.handleChange} placeholder="Linkedin URL" )
                  .field.form-group
                    .row
                      .col-2
                        %label
                          Birthdate
                      .col-10
                        %input( type="text" class="form-control" name="birthdate" value={user.birthdate} onChange={this.handleChange} )
                  .field.form-group
                    %input( type="text" class="form-control" name="birth_country" value={user.birth_country} onChange={this.handleChange} placeholder="Birth country" )
                  %div(class={'field form-group' + ( errors.email ? ' field_with_errors' : '' ) })
                    %input( type="email" class="form-control" name="email" value={user.email} onChange={this.handleChange} placeholder="Email" autoComplete="email" )

                  .actions
                    %Link(to="/dashboard")
                      .btn.btn-outline-dark.btn-lg
                        Back
                    %button(type="submit" name="commit"  value="Save" class="btn btn-lg btn-dark")
                      Save
        ~);
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedUserForm = connect(mapStateToProps)(UserForm);
export { connectedUserForm as UserForm };