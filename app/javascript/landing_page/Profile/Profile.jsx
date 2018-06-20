import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SkillList } from '../SkillList';

class Profile extends React.Component {

    render() {
        const { user } = this.props;
        return (~
          %div
            %h4 Profile
            %h3.text-center
              {`${user.data.first_name} ${user.data.last_name}`}
            %p.text-center
              {user.data.email}
            %p
              {user.data.city && user.data.country && 
                `${ user.data.city }, ${ user.data.country }`}
              {user.data.city && !user.data.country && 
                user.data.city}
              {user.data.country && !user.data.city && 
                user.data.country}
            { user.data.birthdate || user.data.birth_country &&
              (~
                %p
                  `${user.data.birthdate} ${user.data.birth_country}`
              ~)}
            { user.data.phone &&
              (~
                %p
                  {user.data.phone}
               ~)}
            { user.data.facebook_url &&
              (~
                %p
                  %a(href={user.data.facebook_url})
                    Facebook
              ~)}
            { user.data.linkedin_url &&
              (~
              	%p
                  %a(href={user.data.linkedin_url})
                    LinkedIn
               ~)}
            %SkillList

            %Link(to={`dashboard/users/${user.data.id}/edit`})
              %button.btn.btn-dark
                Edit
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

const connectedProfile = connect(mapStateToProps)(Profile);
export { connectedProfile as Profile };