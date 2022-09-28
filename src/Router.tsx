import { Route, Routes } from 'react-router-dom';
import { ContactType } from './pages/CRUD/ContactType/ContactType';
import { CRUD } from './pages/CRUD/CRUD';
import { PersonView } from './pages/CRUD/PersonView/Person';
import { Role } from './pages/CRUD/Role/Role';
import { Root } from './pages/Root/Root';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route
        path="/hw-1/crud/person"
        element={
          <CRUD>
            <PersonView />
          </CRUD>
        }
      />
      <Route
        path="/hw-1/crud/role"
        element={
          <CRUD>
            <Role />
          </CRUD>
        }
      />
      <Route
        path="/hw-1/crud/contact-type"
        element={
          <CRUD>
            <ContactType />
          </CRUD>
        }
      />
    </Routes>
  );
};
