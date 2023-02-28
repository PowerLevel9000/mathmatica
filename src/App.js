import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quote from './components/Quote';
import Default from './components/Default';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<div className="background" />} />
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
