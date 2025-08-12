import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

// @ts-expect-error type error on preview
const Remote = React.lazy(() => import('remote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote">Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/remote" element={<Remote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
