import { Switch, Route } from 'react-router-dom';
import { CRUD } from './pages/CRUD/CRUD';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CRUD />
      </Route>
    </Switch>
  );
};
