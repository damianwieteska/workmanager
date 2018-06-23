import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { taskActions } from '../_actions';
import { TaskItem } from '../TaskItem';
import { TaskForm } from '../TaskForm';

class TaskList extends React.Component {
    componentDidMount() {
        const { list } = this.props;
        this.props.dispatch(taskActions.get(list));
    }

    render() {
        const { list, tasks } = this.props;
        return (~
          %div
            {tasks.loading && <em>Loading tasks...</em>}
            {tasks.items && tasks.items[list.id] && (~
              .card-text
                .sortable-tasks
                  {tasks.items[list.id].map((task, index) =>
                    (~
                      %TaskItem(task={task} list={list} key={index})
                    ~)
                  )}
                <button className="btn btn-outline-dark" type="button" data-toggle="collapse" data-target={`#new-task-collapase-${list.id}`} aria-controls={`new-task-collapase-${list.id}`} aria-expanded="false">
                  Add task
                </button>
                %TaskForm(list={list})
              ~)
            }
        ~);
    }
}

function mapStateToProps(state) {
    const { tasks } = state;
    return {
        tasks
    };
}

const connectedTaskList = connect(mapStateToProps)(TaskList);
export { connectedTaskList as TaskList };