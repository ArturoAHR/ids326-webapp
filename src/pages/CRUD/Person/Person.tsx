import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Person } from '../../../types/person';

export const PersonCRUD = () => {
  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
  ];

  const rows: Person[] = [];
  return (
    <div className="crud-person-container">
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};
