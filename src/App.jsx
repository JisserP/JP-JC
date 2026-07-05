import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Business1 from './pages/Business1';
import Business2 from './pages/Business2';
import Business3 from './pages/Business3';
import Business4 from './pages/Business4';
import Business5 from './pages/Business5';
import Business6 from './pages/Business6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="business/1" element={<Business1 />} />
          <Route path="business/2" element={<Business2 />} />
          <Route path="business/3" element={<Business3 />} />
          <Route path="business/4" element={<Business4 />} />
          <Route path="business/5" element={<Business5 />} />
          <Route path="business/6" element={<Business6 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
