import { PrismaClient } from '@prisma/client';
import React from 'react';

export default async function Issue({ params }: any) {
  const prisma = new PrismaClient();
  const { issueId } = params;
  const issue = await prisma.issue.findFirst({ where: { id: +issueId } });

  if (!issue) {
    throw new Error('Issue not found');
  }

  return (
    <div>
      <h3>{issue?.title}</h3>
      <h5>{issue?.summary}</h5>
      <p>{issue?.description}</p>
    </div>
  );
}
