import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
    </Routes>
  );
}

export default App;
