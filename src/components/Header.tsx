import { useEffect, useRef } from "react";
import type { ICategory, IProduct } from "../@types/product";
import "./Header.scss";
import { Link } from "react-router";

type HeaderProps = {
	cartProducts: number[];
	categories: ICategory[];
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	searchCategory: string;
	setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
	products: IProduct[];
	showSuggestions: boolean;
	setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
	setShowLoginForm: () => void;
};

function Header({
	cartProducts,
	categories,
	searchTerm,
	setSearchTerm,
	searchCategory,
	setSearchCategory,
	products,
	showSuggestions,
	setShowSuggestions,
	setShowLoginForm,
}: HeaderProps) {
	// Fonction pour filtrer les produits selon les critères
	const getFilteredProducts = () => {
		return products
			.filter((product) => {
				const FilteredProduct = product.title
					.toLowerCase()
					.startsWith(searchTerm.toLowerCase());
				const FilteredCategory =
					searchCategory === "" ||
					product.category.id.toString() === searchCategory;
				return FilteredProduct && FilteredCategory;
			})
			.slice(0, 5);
	};

	const filteredProducts = getFilteredProducts();

	// Effet d'ombre sous le header //

	const headerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!headerRef.current) return;

			if (window.scrollY > 0) {
				headerRef.current.classList.add("header--scroll");
			} else {
				headerRef.current.classList.remove("header--scroll");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const inputRef = useRef<HTMLInputElement | null>(null)
	useEffect (()=>{
		inputRef.current?.focus()
	}, []
	)
	return (
		<div className="header">
			<div className="header-logo">
                <Link to="/">
				<img
					className="logo"
					src=".../../public/logos/omazon.svg"
					alt="omazon"
				/>
                </Link>
			</div>
			<a
				href="/account"
				className="header-account"
				onClick={(e) => {
					e.preventDefault();
					setShowLoginForm();
				}}
			>
				Bonjour, identifiez-vous
				<div className="link--bold">
					Compte et listes <span className="icon-caret-down" />
				</div>
			</a>
			<a href="/cart" className="header-cart">
				<div className="header-cart-count">
					<span className="header-cart-count-number">
						{cartProducts.length}
					</span>
					<img
						src=".../../public/icons/cart.svg"
						alt="Panier"
						className="icon-cart"
					/>
				</div>
				<div className="header-cart-title">Panier</div>
			</a>
			<div className="header-form">
				{/*  Boutons de filtre des catégories */}
				<select
					className="header-form-filter"
					value={searchCategory}
					onChange={(c) => setSearchCategory(c.target.value)}
				>
					<option value="">Toutes catégories</option>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.title}
						</option>
					))}
				</select>
				<input
					ref={inputRef}
					type="text"
					className="header-form-input"
					placeholder="Rechercher ..."
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setShowSuggestions(e.target.value.length > 0); // Affiche les suggestions seulement a partir de 1 caractère saisie
					}}
				/>
				{/* Affichage des suggestion dans la barre de recherche */}

				{showSuggestions && filteredProducts.length > 0 && (
					<div className="suggestions-container">
						{filteredProducts.map((product) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								key={product.id}
								className="suggestion-item"
								onClick={() => {
									setSearchTerm(product.title);
									setShowSuggestions(false);
								}}
							>
								<span>{product.title}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
