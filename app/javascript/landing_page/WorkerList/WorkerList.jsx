import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WorkerList extends React.Component {
    render() {

      const positions = (positions) => {
        return (~
          %span
            {positions.map((position, index) => 
              (index == 0 ? ' (' : ' ') + position.name + (index < positions.length - 1 ? ', ' : ')')
            )}
           ~)
        }

        const { workers } = this.props;
        return (~
          %ul
            {workers.map((worker, index) =>
              (~
                %li(key={index})
                  %Link(to={`/users/${worker.id}`})
                    {`${worker.first_name} ${worker.last_name}`}
                  {positions(worker.positions)}
              ~))}
        ~)
    }
}

export { WorkerList };