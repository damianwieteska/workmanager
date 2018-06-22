import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { alertActions } from '../_actions';
import { routes } from '../_routes';
import { history } from '../_helpers';
import { ConnectedRouter } from 'connected-react-router';
import { Header } from '../Header';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
              {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              }
              <Router history={history}>
                <div>
                  <Header />
                  { routes }
                </div>
              </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };