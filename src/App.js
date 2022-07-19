import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './pages/Main.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Skincare from './pages/Skincare.jsx'
import CreamsAndMoisturizers from './pages/CreamsAndMoisturizers.jsx'
import MakeUpRemoverAndCleansers from './pages/MakeupRemoverAndCleansers.jsx'
import BodyCare from './pages/BodyCare.jsx'


function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/product-page' element={<ProductPage />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/search-results' element={<SearchResults />} />
    <Route path='/skincare' element={<Skincare />} />
    <Route path='/creams-and-moisturizers' element={<CreamsAndMoisturizers />} />
    <Route path='/make-up-remover-and-cleansers' element={<MakeUpRemoverAndCleansers />} />
    <Route path='/body-care' element={<BodyCare />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
