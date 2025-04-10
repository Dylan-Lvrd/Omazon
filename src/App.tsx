import { useState } from 'react';
import './App.scss'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Modal from './components/Modale';
import ProductAddForm from './components/ProductAddForm';
import { IProduct, ICategory } from './@types/product';
import p from './data/products.json'
import c from './data/categories.json'


function App() {

  const [cartProducts, setCartProducts] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(p);
  const [categories, setCategories] = useState<ICategory[]>(c);
  const [searchTerm, setSearchTerm] = useState(''); // Ajout de l'état pour la recherche
  const [searchCategory, setSearchCategory] = useState<string>(''); // Ajout pour la catégorie
 
 

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  
  
 
  return (
    
		<div className="app">
			< Header cartProducts={cartProducts} categories={categories}  searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchCategory={searchCategory} setSearchCategory={setSearchCategory}    />
			<main className="main">
        <Categories />
        <Products cartProducts={cartProducts} setCartProducts={setCartProducts} products={products} searchTerm={searchTerm} searchCategory={searchCategory}  />
			</main>
      <Footer handleOpenModal={handleOpenModal} /> 
      
      {isModalOpen && (
        <Modal title="Ajouter un produit" onClose={handleCloseModal}>
          <ProductAddForm setProducts={setProducts} products={products} onClose={handleCloseModal} />
        </Modal>
      )}
		</div>
	);
}

export default App
