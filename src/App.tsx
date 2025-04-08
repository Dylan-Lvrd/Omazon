import { useState } from 'react';
import './App.scss'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Modal from './components/Modale';
import ProductAddForm from './components/ProductAddForm';
import { IProduct } from './@types/product';
import p from './data/products.json'

function App() {

  const [cartProducts, setCartProducts] = useState<number[]>([]); // Etat pour afficher les produits
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour ouvrir/fermer la modale
  const [products, setProducts] = useState<IProduct[]>(p);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
 
  return (
    
		<div className="app">
			< Header cartProducts={cartProducts} />
			<main className="main">
        <Categories />
        <Products cartProducts={cartProducts} setCartProducts={setCartProducts} products={products} />
			</main>
      <Footer handleOpenModal={handleOpenModal} /> {/* Passer la fonction d'ouverture de la modale à Footer */}
      
      {isModalOpen && (
        <Modal title="Ajouter un produit" onClose={handleCloseModal}>
          {/* Ajouter le contenu du formulaire ici si tu veux */}
          <ProductAddForm setProducts={setProducts} products={products}/>
        </Modal>
      )}
		</div>
	);
}

export default App
