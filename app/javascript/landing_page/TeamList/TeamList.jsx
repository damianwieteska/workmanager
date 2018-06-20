import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { teamActions } from '../_actions';
import { WorkerList } from '../WorkerList';

class TeamList extends React.Component {
    componentDidMount() {
        this.props.dispatch(teamActions.getForUser(this.props.user.data.id));
    }

    render() {
        const { user, teams } = this.props;
        return (~
          %div
            {teams.loading && <em>Loading teams...</em>}
            {teams.items && (~
              .list-group.list-group-flush
                {teams.items.map((team, index) =>
                  (~
                  	.list-group-item.list-group-item-action(key={index})
                      %h5
                        {team.name}
                        %button.btn.btn-danger.float-right
                          Leave team
                      %p
                        {team.description}
                      %WorkerList(workers={team.users})
                  ~)
                )}
              ~)
            }
        ~);
    }
}

function mapStateToProps(state) {
    const { teams, authentication } = state;
    const { user } = authentication;
    return {
        user,
        teams
    };
}

const connectedTeamList = connect(mapStateToProps)(TeamList);
export { connectedTeamList as TeamList };