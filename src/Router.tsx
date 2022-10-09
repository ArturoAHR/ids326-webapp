import { Route, Routes } from 'react-router-dom';
import { CompanyView } from './pages/CRUD/CompanyView/CompanyView';
import { ContactTypeView } from './pages/CRUD/ContactTypeView/ContactTypeView';
import { CRUD } from './pages/CRUD/CRUD';
import { DepartmentView } from './pages/CRUD/DepartmentView/DepartmentView';
import { PersonView } from './pages/CRUD/PersonView/PersonView';
import { RoleView } from './pages/CRUD/RoleView/RoleView';
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
            <RoleView />
          </CRUD>
        }
      />
      <Route
        path="/hw-1/crud/contact-type"
        element={
          <CRUD>
            <ContactTypeView />
          </CRUD>
        }
      />
      <Route
        path="/hw-1/crud/department"
        element={
          <CRUD>
            <DepartmentView />
          </CRUD>
        }
      />
      <Route
        path="/hw-1/crud/company"
        element={
          <CRUD>
            <CompanyView />
          </CRUD>
        }
      />
    </Routes>
  );
};
