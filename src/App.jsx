import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';

import PageWrap from './global/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/404Page';

function App() {
  return (
    <>
      <title>Simple Clinic</title>
      <meta name="description" content="Welcome to Simple Clinic, where simplicity is the key to bringing wellness into your life." />
      <Routes>
        <Route path="/" element={<PageWrap />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*"  element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;