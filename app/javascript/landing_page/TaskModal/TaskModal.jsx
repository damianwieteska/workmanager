import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { taskActions } from '../_actions';

class TaskModal extends React.Component {

    handleDeleteTask(e) {
        return (e) => this.props.dispatch(taskActions.delete(projectId, listId, id));
    }

    handleMoveTask(newListId) {
    	const task = { id: this.props.task.id, list_id: newListId, project_id: this.props.list.project_id };
    	const taskModalId = `#task-modal-${task.id}`;
        return (e) => {
        	this.props.dispatch(taskActions.update(task, this.props.list.id));
        	$(taskModalId).modal('hide');
        }
    }

    handleMarkTask(done) {
    	const task = { id: this.props.task.id, list_id: this.props.task.list_id, done: done, project_id: this.props.list.project_id };
    	const taskModalId = `#task-modal-${task.id}`;
        return (e) => {
        	this.props.dispatch(taskActions.update(task, this.props.list.id));
        	$(taskModalId).modal('hide');
        }
    }

    render() {
    	const { task, list, lists } = this.props;
    	const taskModalId = `task-modal-${task.id}`;
        return (~
          <div className="modal fade" id={taskModalId} tabindex="-1" role="dialog" aria-labelledby={taskModalId} aria-hidden="true">
            .modal-dialog( role="document" )
              .modal-content
                .modal-header
                  %h5.modal-title
                    {task.name}
                    { task.done &&
                      (~
                        %span.badge.badge-success
                          DONE
                      ~)
                    }
                  <button className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                      &times;
                    </span>
                  </button>

                .modal-body
                  %p.text-center.font-weight-bold
                    {`Priority: ${task.priority}`}
                  { task.user &&
                    (~
                      %p.text-center
                        Assigned to
                          %Link(to={`/users/${task.user.id}`})
                            {` ${task.user.first_name} ${task.user.last_name}`}
                    ~)
                  }
                  %hr/
                  { task.description &&
                    (~
                      %div
                        %p
                          {task.description}
                        %hr/
                    ~)
                  }
                  %p.font-weight-bold
                    { task.deadline && `Deadline on ${task.deadline}` }
                  %p
                    { task.start_time && `Started on ${task.start_time}` }

                .modal-footer
                  <button className="btn btn-outline-dark" data-dismiss="modal">
                    Close
                  </button>

                  .dropdown
                    <button className="btn btn-outline-dark dropdown-toggle" id="move-task-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Move to...
                    </button>
                    <div className="dropdown-menu" aria-labelledby="move-task-dropdown">
                      {lists.items &&
                        (~ 
                          %div
                            { lists.items.map((l, index) =>
                              (~
                                %div
                                  { l.id !== list.id &&
                                    (~
                                      %a(onClick={this.handleMoveTask(l.id)} className="dropdown-item")
                                        {l.name}
                                    ~)
                                  }
                              ~)
                            )}
                        ~)
                      }
                    </div>

                  <button className="btn btn-dark" data-toggle="modal" data-target={`#edit-task-modal-${task.id}`}>
                    Edit
                  </button>

                  <a onClick={this.handleDeleteTask(task.id, list.id, list.project_id)} data-confirm="Are you sure?">
                    .btn.btn-danger
                      Delete
                  </a>

                  { task.done &&
                  	(~
                      %a(onClick={this.handleMarkTask('false')})
                        %button.btn.btn-warning
                          Undone
                    ~)
                  }
                  { !task.done &&
                  	(~
                      %a(onClick={this.handleMarkTask('true')})
                        %button.btn.btn-success
                          Mark as done
                    ~)
                  }

          </div>
        ~);
    }
}

function mapStateToProps(state) {
    const { lists } = state;
    return {
        lists
    };
}

const connectedTaskModal = connect(mapStateToProps)(TaskModal);
export { connectedTaskModal as TaskModal };