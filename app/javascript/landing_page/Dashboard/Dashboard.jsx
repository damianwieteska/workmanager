import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProjectList } from '../ProjectList';
import { TeamList } from '../TeamList';
import { ContractList } from '../ContractList';
import { Profile } from '../Profile';
import { projectActions } from '../_actions';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(projectActions.getForUser(this.props.user.data.id));
    }

    render() {
        const { user, projects } = this.props;
        return (~
          %div
            %h1.text-center Dashboard
            .row
              .col-6.my-3.border-right
                %h4 Projects
                %ProjectList(projects={projects})
                %Link(to={'/projects'})
                  %button.btn.btn-dark
                    View all
                %Link(to={'/projects/finished'})
                  %button.btn.btn-outline-dark
                    Finished

              .col-6.my-3
                %h4 Teams
                %TeamList

            .row.border-top
              .col-6.my-3.border-right
                %Profile
              .col-6.my-3
                %ContractList
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

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };