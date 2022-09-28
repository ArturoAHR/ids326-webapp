import { Route, Routes } from 'react-router-dom';
import { CRUD } from './pages/CRUD/CRUD';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<></>}></Route>
      <Route path="/hw-1/crud" element={<CRUD />} />
    </Routes>
  );
};
