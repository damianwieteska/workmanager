import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { skillActions } from '../_actions';

class SkillList extends React.Component {
    componentDidMount() {
        this.props.dispatch(skillActions.getForUser(this.props.user.data.id));
    }

    render() {
        const { skills } = this.props;
        return (~
          %span
            {skills.loading && <em>Loading skills...</em>}
            {skills.items &&
              (~
                %p
                  %b Skills:
                  {skills.items.map((skill, index) =>
                    ` ${skill.name};`
                  )}
              ~)
            }
        ~);
    }
}

function mapStateToProps(state) {
    const { skills, authentication } = state;
    const { user } = authentication;
    return {
        user,
        skills
    };
}

const connectedSkillList = connect(mapStateToProps)(SkillList);
export { connectedSkillList as SkillList };