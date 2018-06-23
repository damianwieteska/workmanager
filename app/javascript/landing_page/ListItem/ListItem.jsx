import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions } from '../_actions';
import { EditListForm } from '../EditListForm';
import { TaskList } from '../TaskList';

class ListItem extends React.Component {

    handleDeleteList(id, projectId) {
        return (e) => this.props.dispatch(listActions.delete(id, projectId));
    }

    render() {
        const { user, list } = this.props;
        return (~
          .col(id={list.sortable_id} )
            .card
              %h5.card-header
                {list.name}
                %a(onClick={this.handleDeleteList(list.id, list.project_id)})
                  .btn.btn-sm.btn-danger.float-right
                    Delete
                <div className="btn btn-sm btn-outline-dark float-right" data-toggle="modal" data-target={`#edit-list-modal-${list.id}`}>
                  Edit
                </div>

              .card-body
                %TaskList(list={list})
            .edit-list-modal
              %EditListForm(list={list})

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