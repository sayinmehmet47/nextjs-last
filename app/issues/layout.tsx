import { PrismaClient } from '@prisma/client';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const IssuesLayout = async ({ children }: Props) => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();
  return <div>{children}</div>;
};

export default IssuesLayout;
