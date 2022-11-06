'use client';

import { Sidebar } from 'flowbite-react';
import React from 'react';

type Props = {};

const Aside = (props: Props) => {
  return (
    <Sidebar>
      <React.Fragment key=".0">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/issues/1">NextJS Issues</Sidebar.Item>
            <Sidebar.Item href="/issues/2">Other Issues</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </React.Fragment>
    </Sidebar>
  );
};

export default Aside;
