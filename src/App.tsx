import { useEffect, useState } from 'react';
import './App.scss'
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Modal from './components/Modale';
import ProductAddForm from './components/ProductAddForm';
import type { IProduct, ICategory } from './@types/product';
import axios from 'axios';


function App() {

  const [cartProducts, setCartProducts] = useState<number[]>([]); // Affichage des produits dans le panier
  const [isModalOpen, setIsModalOpen] = useState(false); // Affichage de la modal pour ajout d'un produit
  const [products, setProducts] = useState<IProduct[]>([]); // Ajout d'un produit dans la modale
  const [categories, setCategories] = useState<ICategory[]>([]); // Affichage des categories
  const [searchTerm, setSearchTerm] = useState(''); // Ajout de l'état pour la recherche
  const [searchCategory, setSearchCategory] = useState<string>(''); // Ajout pour la catégorie
  const [showSuggestions, setShowSuggestions] = useState(false); // Nouvel état pour afficher/cacher les suggestions
  const [isLoading, setIsLoading] = useState(true); // Loader


// Effet pour mettre à jour le titre de l'onglet avec le nombre d'article dans le panier
useEffect(() => {
  const count = cartProducts.length;
  document.title = count > 0 
    ? `Omazon - (Panier : ${count} ${count > 1 ? 'produits' : 'produit'})` 
    : 'Omazon';
}, [cartProducts]);


 

  const handleOpenModal = () => setIsModalOpen(true); // Ouverture de la modale
  const handleCloseModal = () => setIsModalOpen(false);// Fermeture de la modale

  useEffect (() => {
		const getProducts = async () => {
		  try {
			const response = await axios.get(
			  'https://omazon-server.onrender.com/products',
			);
			console.log(response.data)
		   setProducts(response.data)
		  }
		  catch(error){
			console.log(error);
		  }
      setIsLoading(false)
		};
		getProducts()
	  }, []);

      // Récupération des catégories
      useEffect (() => {
        const getProducts = async () => {
          try {
          const response = await axios.get(
            'https://omazon-server.onrender.com/categories',
          );
          console.log(response.data)
           setCategories(response.data)
          }
          catch(error){
          console.log(error);
          }
          setIsLoading(false)
        };
        getProducts()
        }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <p>Loading...</p>
        </div>
      </div>
    );
  };

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
      <Categories categories={categories}  />
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
