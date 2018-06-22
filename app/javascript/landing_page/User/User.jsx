import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class User extends React.Component {
    componentDidMount() {
    	const id = this.props.match.params.id;
        this.props.dispatch(userActions.get(id));
    }

    render() {
        const { user, users } = this.props;
        return (~
          .row.justify-content-center
            .col-6
              {users.item &&
                (~
                  %div
                    .jumbotron.text-center
                      %h1.display-4
                        {`${user.data.first_name} ${users.item.last_name}`}
                      %hr.my-4
                      %p.lead
                        {user.email}
                      %p
                        {users.item.city && users.item.country && 
                          `${ users.item.city }, ${ users.item.country }`}
                        {users.item.city && !users.item.country && 
                          users.item.city}
                        {users.item.country && !users.item.city && 
                          users.item.country}
                      { users.item.birthdate || users.item.birth_country &&
                        (~
                          %p
                            `${users.item.birthdate} ${users.item.birth_country}`
                        ~)}
                      { users.item.phone &&
                        (~
                          %p
                            {users.item.phone}
                         ~)}
                      { users.item.facebook_url &&
                        (~
                          %p
                            %a(href={users.item.facebook_url})
                              Facebook
                        ~)}
                      { users.item.linkedin_url &&
                        (~
                        	%p
                            %a(href={users.item.linkedin_url})
                              LinkedIn
                         ~)}
                      { users.item.skills &&
                        (~
                        	%p
                            %b Skills:
                              {users.item.skills}
                         ~)}
                      { users.item.positions && users.item.positions.map((position, index) =>
                        (~
                          %p(key={index})
                            {position.name}
                        ~))
                      }

                    %Link(to={'/dashboard'})
                      %button.btn.btn-lg.btn-outline-dark
                        Back
                    { user.data.id == users.item.id &&
                      (~
                        %Link(to={`/users/${users.item.id}/edit`})
                          %button.btn.btn-lg.btn-dark
                            Edit
                      ~)
                    }
                ~)
              }
        ~);
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedUser = connect(mapStateToProps)(User);
export { connectedUser as User };