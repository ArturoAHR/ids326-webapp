import { Switch, Route } from 'react-router-dom';
import { CRUD } from './pages/CRUD/CRUD';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <></>
      </Route>
      <Route exact path="/hw-1/crud">
        <CRUD />
      </Route>
    </Switch>
  );
};
