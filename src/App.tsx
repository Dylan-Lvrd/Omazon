import './App.scss'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';


function App() {
  

  return (
    
		<div className="app">
			< Header />
			<main className="main">
        <Categories />
        <Products />
			</main>
      <Footer />
		</div>
	);
}

export default App
