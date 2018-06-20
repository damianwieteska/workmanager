import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';
import { ProjectList } from '../ProjectList';

class FinishedProjects extends React.Component {
    componentDidMount() {
        this.props.dispatch(projectActions.getFinishedForUser(this.props.user.data.id));
    }

    render() {
        const { user, projects } = this.props;
        return (~
          %div
            %h1 Finished projects
            .row
              .col
                %ProjectList(projects={projects})
        ~);
    }
}

function mapStateToProps(state) {
    const { projects, authentication } = state;
    const { user } = authentication;
    return {
        user,
        projects
    };
}

const connectedFinishedProjects = connect(mapStateToProps)(FinishedProjects);
export { connectedFinishedProjects as FinishedProjects };