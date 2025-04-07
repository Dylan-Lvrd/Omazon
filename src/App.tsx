import { useState } from 'react';
import './App.scss'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';


function App() {

  const [cartProducts, setCartProducts] = useState([])
  
  

  return (
    
		<div className="app">
			< Header cartProducts={cartProducts} />
			<main className="main">
        <Categories />
        <Products cartProducts={cartProducts} setCartProducts={setCartProducts} />
			</main>
      <Footer />
		</div>
	);
}

export default App
