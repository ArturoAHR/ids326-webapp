import { FC, ReactNode } from 'react';

import './Layout.css';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-sidebar"></div>
      <div className="layout-content">{children}</div>
    </div>
  );
};
