import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TraverseePage from './pages/TraverseePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/traversee" element={<TraverseePage />} />
      </Routes>
    </BrowserRouter>
  );
}
