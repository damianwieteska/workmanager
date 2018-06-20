import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { projects } from './projects.reducer';
import { teams } from './teams.reducer';
import { skills } from './skills.reducer';
import { contracts } from './contracts.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  projects,
  teams,
  skills,
  contracts,
  alert
});

export default rootReducer;