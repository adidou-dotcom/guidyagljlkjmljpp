import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Recruteurs from './pages/Recruteurs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/recruteurs" element={<Recruteurs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
