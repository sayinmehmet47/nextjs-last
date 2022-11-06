'use client';

import { Spinner } from 'flowbite-react';
import React from 'react';

type Props = {};

function Loading({}: Props) {
  return <Spinner color="info" size="md" title="Default spinner example" />;
}

export default Loading;
