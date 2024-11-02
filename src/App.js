import './App.css';

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;