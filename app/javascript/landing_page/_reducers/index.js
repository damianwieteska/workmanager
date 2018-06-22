import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { projects } from './projects.reducer';
import { teams } from './teams.reducer';
import { skills } from './skills.reducer';
import { contracts } from './contracts.reducer';
import { lists } from './lists.reducer';
import { tasks } from './tasks.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  users,
  projects,
  teams,
  skills,
  contracts,
  lists,
  tasks
});

export default rootReducer;