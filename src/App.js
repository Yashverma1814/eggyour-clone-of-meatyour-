import { Route, Routes } from 'react-router';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { InfoPage } from './Pages/InfoPage';
import { ProductsPage } from './Pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/information' element={<InfoPage />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <ProductsPage />       */}
      {/* <InfoPage /> */}
    </div>
  );
}

export default App;
