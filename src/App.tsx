import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TraverseePage from './pages/TraverseePage';
import MaitriserPage from './pages/MaitriserPage';

// Le routeur (BrowserRouter côté client, StaticRouter côté SSR)
// est injecté par l'entrée qui appelle ce composant.
export default function App() {
  return (
    <Routes>
      <Route path="/"          element={<HomePage />} />
      <Route path="/traversee" element={<TraverseePage />} />
      <Route path="/bilan"     element={<MaitriserPage />} />
    </Routes>
  );
}
