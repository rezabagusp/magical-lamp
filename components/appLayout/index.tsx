import React, { ReactNode } from 'react';
import HeaderBar from './headerBar';

interface Props {
  children: ReactNode,
}

const AppLayout = ({
  children,
}: Props) => (
  <div className="pt-14">
    <div className="bg-neutral-10 fixed top-0 px-4 w-full z-10 shadow-md shadow-neutral-30">
      <HeaderBar />
    </div>
    <main className="pb-8 pt-4">{children}</main>
  </div>
);

export default AppLayout;
