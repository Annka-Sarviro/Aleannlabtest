import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import DetailedJob from '../pages/DetailedJob/DetailedJob';
import JobList from '../pages/JobList/JobList';
import { Layout } from './Layout/Layout';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<JobList />} />
          <Route path="/:jobId" element={<DetailedJob />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
