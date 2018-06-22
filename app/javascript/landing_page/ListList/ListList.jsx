import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions } from '../_actions';
import { ListItem } from '../ListItem';

class ListList extends React.Component {
    componentDidMount() {
        this.props.dispatch(listActions.get(this.props.project_id));
    }

    render() {
        const { user, lists } = this.props;
        return (~
          %div
            {lists.loading && <em>Loading lists...</em>}
            {lists.items && (~
              .row.sortable-lists
                {lists.items.map((list, index) =>
                  (~
                    %ListItem(list={list} key={index})
                  ~)
                )}
              ~)
            }
        ~);
    }
}

function mapStateToProps(state) {
    const { lists, authentication } = state;
    const { user } = authentication;
    return {
        user,
        lists
    };
}

const connectedListList = connect(mapStateToProps)(ListList);
export { connectedListList as ListList };