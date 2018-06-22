import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { contractActions } from '../_actions';
import { WorkerList } from '../WorkerList';

class ContractList extends React.Component {
    componentDidMount() {
        this.props.dispatch(contractActions.getForUser(this.props.user.data.id));
    }

    render() {
        const { user, contracts } = this.props;
        return (~
          %div
            {contracts.loading && <em>Loading contracts...</em>}
            {contracts.items && (~
              %div
                %h4 Contract
                {contracts.items.map((contract, index) =>
                  (~
                  	%div(key={index})
                      %h3.text-center
                        {contract.position_name}
                      %p.text-center
                        {contract.position_level}
                      %p.text-center
                        {contract.position_area}
                      %p.text-center
                        {contract.position_description}
                      %p
                        {contract.start}
                        {contract.end}
                      %p
                        %b Salary: 
                        {' ' + contract.salary}
                  ~)
                )}
              ~)
            }
        ~)
    }
}

function mapStateToProps(state) {
    const { contracts, authentication } = state;
    const { user } = authentication;
    return {
        user,
        contracts
    };
}

const connectedContractList = connect(mapStateToProps)(ContractList);
export { connectedContractList as ContractList };