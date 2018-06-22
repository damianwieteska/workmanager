import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions } from '../_actions';
import { WorkerList } from '../WorkerList';

class ListItem extends React.Component {

    handleDeleteList(id) {
        return (e) => this.props.dispatch(listActions.delete(id));
    }

    render() {
        const { user, list } = this.props;
        return (~
          %div
            .col(id={list.sortable_id} )
              .card
                %h5.card-header
                  {list.name}
                  %a(onClick={this.handleDeleteList(list.id)})
                    .btn.btn-sm.btn-danger.float-right
                      Delete
                  <div className="btn btn-sm btn-outline-dark float-right" data-toggle="modal" data-target={`#edit-list-modal-${list.id}`}>
                    Edit
                  </div>

                .card-body
                  .card-text
                    .sortable-tasks
                      {list.tasks.map((task, index) =>
                        (~
                          %div
                            task
                        ~)
                      )}
                    <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target={`#new-task-collapase-${list.id}`} aria-controls={`new-task-collapase-${list.id}`} aria-expanded="false">
                      Add task
                    </button>
              .edit-list-modal

        ~);
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedListItem = connect(mapStateToProps)(ListItem);
export { connectedListItem as ListItem };