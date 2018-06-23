import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions, userActions } from '../_actions';
import { ListItem } from '../ListItem';
import { ListForm } from '../ListForm';

class ListList extends React.Component {
    componentDidMount() {
        this.props.dispatch(listActions.get(this.props.projectId));
        this.props.dispatch(userActions.getAll());
    }

    componentDidUpdate() {
        $('.sortable-lists').railsSortable({
          axis: "x",
          opacity: 0.9
        });
    }

    render() {
        const { user, lists, users } = this.props;
        return (~
          %div
            {lists.loading && <em>Loading lists...</em>}
            {lists.items && users.items && (~
              .row.sortable-lists
                {lists.items.map((list, index) =>
                  (~
                    %ListItem(list={list} key={index})
                  ~)
                )}
              ~)
            }
            %ListForm(projectId={this.props.projectId})
        ~);
    }
}

function mapStateToProps(state) {
    const { lists, users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        lists,
        users
    };
}

const connectedListList = connect(mapStateToProps)(ListList);
export { connectedListList as ListList };