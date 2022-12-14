import { Route, Routes } from 'react-router';
import './App.css';
import { CartPage } from './Pages/CartPage';
import { HomePage } from './Pages/HomePage';
import { InfoPage } from './Pages/InfoPage';
import { ProductsPage } from './Pages/ProductsPage';
import { ThankyouPage } from './Pages/ThankyouPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/information' element={<InfoPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/thanks' element={<ThankyouPage />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <ProductsPage />*/}
      {/* <InfoPage /> */}
    </div>
  );
}

export default App;
