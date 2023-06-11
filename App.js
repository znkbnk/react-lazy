import React, { Suspense } from 'react';

const ComponentA = React.lazy(() => import('./ComponentA'));
const ComponentB = React.lazy(() => import('./ComponentB'));

function LoadingComponent() {
  return <div>Loading...</div>;
}

function App() {
  return (
    <div>
      <h1>Lazy Loading Components</h1>
      <Suspense fallback={<LoadingComponent />}>
        <ComponentA />
      </Suspense>
      <Suspense fallback={<LoadingComponent />}>
        <ComponentB />
      </Suspense>
    </div>
  );
}

export default App;
