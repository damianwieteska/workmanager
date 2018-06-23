import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { taskActions } from '../_actions';
import { Error } from '../Error';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        const { list } = this.props;

        this.state = {
            task: {
            	name: '',
                description: '',
                start_time: '',
                deadline: '',
                priority: 'very_low',
                user_id: '',
                list_id: list.id,
                project_id: list.project_id
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
        const { task, errors } = this.state;
        this.setState({
            task: {
                ...task,
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
        const { task, errors } = this.state;
        const { dispatch, list } = this.props;
        const collapseId = `#new-task-collapase-${list.id}`;

        this.setState({
        	submitted: true,
            errors: {
              name: this.validateField('name', task.name)
            }});
        if (!this.validateField('name', task.name)) {
            dispatch(taskActions.create(task));
            $(collapseId).collapse('hide');
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
        const { task, errors, submitted } = this.state;
        const { list, users } = this.props;
        const collapseId = `new-task-collapase-${list.id}`;

        return (~
          .collapse(id={collapseId})
            .card.card-body
              %form(name="form" onSubmit={this.handleSubmit})
                %Error(error={errors.name})

                %div(class={'field form-group' + ( errors.name ? ' field_with_errors' : '' ) })
                  %input( type="text" class="form-control" name="name" value={task.name} onChange={this.handleChange} placeholder="Name" )
                .field.form-group
                  %input( type="text" class="form-control" name="description" value={task.description} onChange={this.handleChange} placeholder="Description" )
                .field.form-group
                  .row
                    .col
                      %input( type="text" class="form-control form-datepicker" name="start_time" value={task.start_time} onChange={this.handleChange} placeholder="Start time" )
                .field.form-group
                  .row
                    .col
                      %input( type="text" class="form-control form-datepicker" name="deadline" value={task.deadline} onChange={this.handleChange} placeholder="Deadline" )
                .field.form-group
                  .row
                    .col-4
                      %label Priority
                    .col-8
                      <select value={task.priority} onChange={this.handleChange} name="priority" className="form-control">
                        <option value="very_low" key='1'>Very low</option>
                        <option value="low" key='2'>Low</option>
                        <option value="normal" key='3'>Normal</option>
                        <option value="important" key='4'>Important</option>
                        <option value="critical" key='5'>Critical</option>
                      </select>
                .field.form-group
                  .row
                    .col-4
                      Assign to:
                    .col-8
                      <select value={task.user_id} name="user_id" onChange={this.handleChange} className="form-control">
                        <option value="" disabled selected>Choose...</option>
                        {users.items.map((user, index) =>
                          <option value={user.id} key={index}>
                            {`${user.first_name} ${user.last_name}`}
                          </option>
                        )}
                      </select>

                .actions
                  <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target={"#" + collapseId} aria-controls={collapseId} expanded="false">
                    Back
                  </button>
                  %button(type="submit" name="commit"  value="Save" class="btn btn-dark")
                    Save

        ~);
    }
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedTaskForm = connect(mapStateToProps)(TaskForm);
export { connectedTaskForm as TaskForm };