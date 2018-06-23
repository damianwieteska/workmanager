import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions } from '../_actions';
import { Error } from '../Error';

class EditListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: {
            	id: this.props.list.id || '',
            	name: this.props.list.name || '',
            	project_id: this.props.list.project_id || ''
            },
            errors: {
                name: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { list, errors } = this.state;
        this.setState({
            list: {
                ...list,
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
        const { list, errors } = this.state;
        const { dispatch } = this.props;

        this.setState({
        	submitted: true,
            errors: {
              name: this.validateField('name', list.name)
            }});
        if (!this.validateField('name', list.name)) {
            dispatch(listActions.update(list));
            $("#edit-list-modal-" + list.id).modal('hide');

        }
    }

    validateField(name, value) {
      switch (name) {
        case 'name':
          return value ? '' : "Name can't be blank";
       default:
          return '';
      }
    }

    render() {
        const { list, errors, submitted } = this.state;
        const modalId = `edit-list-modal-${list.id}`;
        return (~
          <div id={modalId} className="modal fade" tabindex="-1" role="dialog" aria-labelledby={modalId} aria-hidden="true">
            .modal-dialog( role="document" )
              .modal-content
                .modal-header
                  %h5.modal-title
                    {`Edit ${list.name}`}
                  <button className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                      &times;
                    </span>
                  </button>

                %form(name="form" onSubmit={this.handleSubmit})
                  .modal-body
                    %Error(error={errors.name})

                    %div(class={'field form-group' + ( errors.name ? ' field_with_errors' : '' ) })
                      %input( type="text" class="form-control" name="name" value={list.name} onChange={this.handleChange} placeholder="Name" )
                  .modal-footer
                    <button className="btn btn-outline-dark" data-dismiss="modal">
                      Close
                    </button>
                    %button(type="submit" name="commit"  value="Save" class="btn btn-dark")
                      Save
          </div>
        ~);
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    return {
        authentication
    };
}

const connectedEditListForm = connect(mapStateToProps)(EditListForm);
export { connectedEditListForm as EditListForm };