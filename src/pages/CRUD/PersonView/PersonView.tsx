import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { usePerson } from '../../../hooks/usePerson';

import './PersonView.css';

export const PersonView = () => {
  const { people } = usePerson();

  const columns: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
    },
  ];

  return (
    <div className="crud-person-container">
      <div className="crud-person-table">
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid columns={columns} rows={people} />
        </Box>
      </div>
    </div>
  );
};
