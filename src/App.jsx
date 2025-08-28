import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stories from './pages/Stories';
import Story from './pages/Story';
import Share from './pages/Share';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:id" element={<Story />} />
          <Route path="/share" element={<Share />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;