import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './index.css';
import { Start } from './pages/start';
import { Play } from './pages/play';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}
