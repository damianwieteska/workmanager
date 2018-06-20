import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class WorkerList extends React.Component {

    render() {
        const { workers } = this.props;
        return (~
          %ul
            {workers.map((worker, index) =>
              (~
                %li
                  %Link(to={`users/${worker.id}`})
                    {`${worker.first_name} ${worker.last_name}`}
                  {positions(worker)}
              ~))}
        ~)
    }
}

function positions(worker) {
  let positionsText = "";
  worker.positions.map((position, index) =>
    <span key={index}>
      { index == 0 && positionsText + '('};
      positionsText = positionsText + position.name;
      if(index == worker.positions.lenght - 1) {
        positionsText = positionsText + ')'
      } else {
        positionsText = positionsText + ', '
      }
    </span>)
  return positionsText;
}

export { WorkerList };