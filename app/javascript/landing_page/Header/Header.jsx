import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';

class Header extends React.Component {

    render() {
        const { user } = this.props;
        return (~
          %div
            { user &&
              (~
                %nav#navbar-top.navbar.navbar-expand-lg.fixed-top
                  .navbar-brand
                    %Link(to="/dashboard")
                      WORKMANAGER
                  <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#menu-navbar" aria-controls="menu-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    %span.navbar-toggler-icon
                  </button>
                  #menu-navbar.collapse.navbar-collapse
                    %ul.navbar-nav.mr-auto
                      %li.nav-item.active
                        %Link(to="/dashboard" class="nav-link")
                          Dashboard
                          %span.sr-only
                            (current)
                      %li.nav-item
                        %Link(to="/projects" class="nav-link")
                          Projects
                      %li.nav-item
                        %Link(to="/projects/finished" class="nav-link")
                          Finished projects
                    { ( user.role == "moderator" || user.role == "admin" ) &&
                      (~
                        %Link(to="/admin/projects" class="nav-link")
                          .btn.btn-outline-light
                            Admin panel
                      ~)}
                    %Link(to="/login" class="nav-link")
                      %button.btn.btn-danger
                        Sign out
          ~)}
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

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };