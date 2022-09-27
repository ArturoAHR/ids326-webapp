import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="layout-sidebar"></div>
      <div className="layout-content">{children}</div>
    </div>
  );
};
