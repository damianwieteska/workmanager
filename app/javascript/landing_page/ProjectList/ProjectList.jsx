import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProjectList extends React.Component {

    render() {
        const { user, projects } = this.props;
        return (~
          %div
            {projects.loading && <em>Loading projects...</em>}
            {projects.items && (~
              .list-group.list-group-flush
                {projects.items.map((project, index) =>
                  (~
                    %Link(to={`projects/${project.id}`} class="list-group-item list-group-item-action" key={index})
                        {project.name}
                  ~)
                )}
              ~)
            }
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

const connectedProjectList = connect(mapStateToProps)(ProjectList);
export { connectedProjectList as ProjectList };