import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Books from './Components/pages/Books';
import Categories from './Components/pages/Categories';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
