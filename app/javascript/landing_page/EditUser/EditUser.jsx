import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, skillActions } from '../_actions';
import { UserForm } from '../UserForm';

class EditUser extends React.Component {
    componentDidMount() {
    	const id = this.props.match.params.id;
        this.props.dispatch(skillActions.getAll());
        this.props.dispatch(userActions.get(id));
    }

    render() {
        const { users, skills } = this.props;
        return (~
          %div
            {users.item && skills.items &&
              (~
                %UserForm(user={users.item} skills={skills.items} )
              ~)}
        ~);
    }
}

function mapStateToProps(state) {
    const { users, skills } = state;
    return {
        users,
        skills
    };
}

const connectedEditUser = connect(mapStateToProps)(EditUser);
export { connectedEditUser as EditUser };