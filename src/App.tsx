import { useEffect, useState } from 'react';
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

  const [cartProducts, setCartProducts] = useState<number[]>([]); // Affichage des produits dans le panier
  const [isModalOpen, setIsModalOpen] = useState(false); // Affichage de la modal pour ajout d'un produit
  const [products, setProducts] = useState<IProduct[]>(p); // Ajout d'un produit dans la modale
  const [categories, setCategories] = useState<ICategory[]>(c); // Affichage des categories
  const [searchTerm, setSearchTerm] = useState(''); // Ajout de l'état pour la recherche
  const [searchCategory, setSearchCategory] = useState<string>(''); // Ajout pour la catégorie
  const [showSuggestions, setShowSuggestions] = useState(false); // Nouvel état pour afficher/cacher les suggestions


// Effet pour mettre à jour le titre de l'onglet
useEffect(() => {
  const count = cartProducts.length;
  document.title = count > 0 
    ? `Omazon - (Panier : ${count} ${count > 1 ? 'produits' : 'produit'})` 
    : 'Omazon';
}, [cartProducts]);


 

  const handleOpenModal = () => setIsModalOpen(true); // Ouverture de la modale
  const handleCloseModal = () => setIsModalOpen(false);// Fermeture de la modale

  
  
 
  return (
    
		<div className="app">
			< Header 
        cartProducts={cartProducts}
        categories={categories}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        products={products}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        />
			<main className="main">
      <Categories />
      <Products
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        products={products} 
        searchTerm={searchTerm} 
        searchCategory={searchCategory}  />
			</main>
      <Footer handleOpenModal={handleOpenModal} /> 
      
      {isModalOpen && (
      <Modal title="Ajouter un produit" onClose={handleCloseModal}>
      <ProductAddForm 
        setProducts={setProducts} 
        products={products} 
        onClose={handleCloseModal} />
      </Modal>
      )}
		</div>
	);
}

export default App
