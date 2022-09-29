import { FC, ReactNode } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';

import './Layout.css';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <Sidebar />
      </div>
      <div className="layout-content">{children}</div>
    </div>
  );
};
