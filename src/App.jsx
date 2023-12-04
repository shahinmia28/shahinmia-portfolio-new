import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './Component/Footer';
import UnderConstruction from './pages/UnderConstruction';
import Page404 from './pages/Page404';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path={'/underConstruction'} element={<UnderConstruction />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
        <div className='bottom'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
