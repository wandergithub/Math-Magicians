import { Routes, Route } from 'react-router-dom';
import './App.css';
import CalcPage from './components/CalcPage';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<CalcPage />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
