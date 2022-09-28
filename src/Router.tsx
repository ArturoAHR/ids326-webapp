import { Route, Routes } from 'react-router-dom';
import { ContactType } from './pages/CRUD/ContactType/ContactType';
import { CRUD } from './pages/CRUD/CRUD';
import { PersonCRUD } from './pages/CRUD/Person/Person';
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
            <PersonCRUD />
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
