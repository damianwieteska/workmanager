import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TaskModal } from '../TaskModal';
import { EditTaskForm } from '../EditTaskForm';

class TaskItem extends React.Component {

    render() {
        const { task, list } = this.props;
        return (~
          %div( id={task.sortable_id} )
            <a href={`#task-modal-${task.id}`} data-toggle="modal">
              .card.card-body.my-2
                %p.card-text
                  {task.name}
                  { task.done &&
                    (~
                      %span.badge.badge-success
                        DONE
                    ~)
                  }
            </a>
            %TaskModal(task={task} list={list})
            %EditTaskForm(task={task} list={list})
        ~);
    }
}

function mapStateToProps(state) {
    const { lists } = state;
    return {
        lists
    };
}

const connectedTaskItem = connect(mapStateToProps)(TaskItem);
export { connectedTaskItem as TaskItem };