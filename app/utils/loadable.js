import React, { lazy, Suspense } from 'react';
import { Spinner } from 'reactstrap';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={<Spinner color="secondary" />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
