import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modale";
import ProductAddForm from "./components/ProductAddForm";
import type { IProduct, ICategory } from "./@types/product";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePages";
import ProductPage from "./components/ProductPage";
import CategoryPage from "./components/CategoryPage";

function App() {
	const [cartProducts, setCartProducts] = useState<number[]>([]); // Affichage des produits dans le panier
	const [isModalOpen, setIsModalOpen] = useState(false); // Affichage de la modal pour ajout d'un produit
	const [products, setProducts] = useState<IProduct[]>([]); // Affichage des produits
	const [categories, setCategories] = useState<ICategory[]>([]); // Affichage des categories
	const [searchTerm, setSearchTerm] = useState(""); // Ajout de l'état pour la recherche
	const [searchCategory, setSearchCategory] = useState<string>(""); // Ajout pour la catégorie
	const [showSuggestions, setShowSuggestions] = useState(false); // Nouvel état pour afficher/cacher les suggestions
	const [isLoading, setIsLoading] = useState(true); // Loader
	const [showLoginForm, setShowLoginForm] = useState(false); // Affichage du formulaire de connexion

	// Effet pour mettre à jour le titre de l'onglet avec le nombre d'article dans le panier
	useEffect(() => {
		const count = cartProducts.length;
		document.title =
			count > 0
				? `Omazon - (Panier : ${count} ${count > 1 ? "produits" : "produit"})`
				: "Omazon";
	}, [cartProducts]);

	const handleOpenModal = () => setIsModalOpen(true); // Ouverture de la modale
	const handleCloseModal = () => setIsModalOpen(false); // Fermeture de la modale
	const handleOpenLoginForm = () => setShowLoginForm(true); // Ouverture formulaire de connexion
	const handleCloseLoginForm = () => setShowLoginForm(false); // Fermeture formulaire de connexion

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					"https://omazon-server.onrender.com/products",
				);
				console.log(response.data);
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};
		getProducts();
	}, []);

	// Récupération des catégories
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					"https://omazon-server.onrender.com/categories",
				);
				console.log(response.data);
				setCategories(response.data);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};
		getProducts();
	}, []);

	if (isLoading) {
		return (
			<div className="loader-container">
				<div className="loader">
					<p>Loading...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="app">
			<Header
				cartProducts={cartProducts}
				categories={categories}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				searchCategory={searchCategory}
				setSearchCategory={setSearchCategory}
				products={products}
				showSuggestions={showSuggestions}
				setShowSuggestions={setShowSuggestions}
				setShowLoginForm={handleOpenLoginForm}
			/>
			{showLoginForm && (
				<Modal title="Connexion" onClose={handleCloseLoginForm}>
					<LoginForm />
				</Modal>
			)}

			<Routes>
				{/* route vers la page d'acceuil */}
				<Route
					path="/"
					element={
						<HomePage
							categories={categories}
							cartProducts={cartProducts}
							setCartProducts={setCartProducts}
							products={products}
							searchTerm={searchTerm}
							searchCategory={searchCategory}
						/>
					}
				/>
				<Route
					path="/produit/:id"
					element={<ProductPage products={products} />}
				/>

				<Route
					path="/categorie/:slug"
					element={
						<CategoryPage
							categories={categories}
							cartProducts={cartProducts}
							setCartProducts={setCartProducts}
							products={products}
						/>
					}
				/>

				{/* route pour les erreurs 404 */}
				<Route path="*" element={<div>Erreur 404</div>} />
			</Routes>

			<Footer handleOpenModal={handleOpenModal} />

			{isModalOpen && (
				<Modal title="Ajouter un produit" onClose={handleCloseModal}>
					<ProductAddForm
						setProducts={setProducts}
						products={products}
						onClose={handleCloseModal}
					/>
				</Modal>
			)}
		</div>
	);
}

export default App;
