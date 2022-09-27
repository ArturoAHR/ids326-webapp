import { Tab, Tabs } from '@mui/material';
import { FC, ReactNode } from 'react';

type CRUDProps = {
  children?: ReactNode;
};

export const CRUD: FC<CRUDProps> = ({ children }) => {
  return (
    <div>
      <Tabs>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      {children}
    </div>
  );
};
