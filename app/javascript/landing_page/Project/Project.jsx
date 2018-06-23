import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectActions } from '../_actions';
import { WorkerList } from '../WorkerList';
import { ListList } from '../ListList';

class Project extends React.Component {
    componentDidMount() {
    	const id = this.props.match.params.id;
        this.props.dispatch(projectActions.get(id));
    }

    handleLeaveProject(id) {
        return (e) => this.props.dispatch(projectActions.leave(id, this.props.user.data.id));
    }

    render() {
        const { user, projects } = this.props;
        const project = projects.item;
        return (~
          .row
            .col
              {project && (~
                %div
                  %Link(to={'/projects'})
                    %button.btn.btn-outline-dark
                      Back
                  { project.users.filter((u) => u.id === user.data.id).length > 0 &&
                    (~
                      %a(onClick={this.handleLeaveProject(project.id)})
                        %button.btn.btn-danger
                          Leave project
                    ~)
                  }
                  %h1.text-center
                    {project.name}

                  %nav
                    #nav-tab.nav.nav-tabs( role="tablist" )
                      <a id='nav-tasks-tab' className='nav-item nav-link active' data-toggle="tab" href="#nav-tasks" role="tab" aria-controls="nav-tasks" aria-selected="true">
                        Tasks
                      </a>
                      <a id='nav-tasks-tab' className='nav-item nav-link' data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="false">
                        Info
                      </a>
                  #nav-tabContent.tab-content
                    <div id="nav-tasks" className="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-tasks-tab">
                      <button className="btn btn-dark m-3" data-toggle="modal" data-target="#new-list-modal">
                        Add list
                      </button>
                      %ListList(projectId={project.id})
                    </div>
                    <div id="nav-info" className="tab-pane fade" role="tabpanel" aria-labelledby="nav-info-tab">
                      .row
                        .col.m-3
                          %p.text-right
                            { project.start_time && `Started on ${project.start_time}` }
                          %h3.text-center
                            { project.deadline && `Deadline on ${project.deadline}` }
                          %h5.text-center
                            { `Priority: ${project.priority}` }
                          %p
                            {project.description}

                          { project.teams &&
                          	(~
                          	  %div
                                %p.font-weight-bold
                                  Teams:
                                {project.teams.map((team, index) =>
                                  (~
                                    %div(key={index})
                                      %p
                                        {team.name}
                                      %WorkerList(workers={team.users})
                                  ~)
                                  )}
                              ~)
                          }

                          { project.users &&
                          	(~
                          	  %div
                                %p.font-weight-bold
                                  Members:
                                %div
                                  %WorkerList(workers={project.users})
                            ~)
                          }
                    </div>
              ~)}
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

const connectedProject = connect(mapStateToProps)(Project);
export { connectedProject as Project };