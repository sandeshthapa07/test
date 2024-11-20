'use client';

import { type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function fallbackRender({ error }: { error: Error }) {
  return (
    <div role='alert' className='flex h-52  flex-col items-center justify-center gap-2 bg-primary'>
      <pre className='text-xl text-white'>{error.message}</pre>
    </div>
  );
}

const ErrorBoundaryWrapper = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
