import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { UserForm } from '../UserForm';

class EditUser extends React.Component {
    componentDidMount() {
    	const id = this.props.match.params.id;
        this.props.dispatch(userActions.get(id));
    }

    render() {
        const { users } = this.props;
        return (~
          %div
            {users.item &&
              (~
                %UserForm(user={users.item} )
              ~)}
        ~);
    }
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedEditUser = connect(mapStateToProps)(EditUser);
export { connectedEditUser as EditUser };