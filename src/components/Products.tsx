import "./Products.scss";
import type { IProduct } from "../@types/product";
import { Link } from "react-router";

interface ProductsProps {
	cartProducts: number[];
	setCartProducts: React.Dispatch<React.SetStateAction<number[]>>;
	products: IProduct[];
	searchTerm: string;
	searchCategory: string;
}

function Products({
	cartProducts,
	setCartProducts,
	products,
	searchTerm,
	searchCategory,
}: ProductsProps) {
	const filteredProducts = products.filter((product) => {
		// Filtre par terme de recherche
		const FilteredTerm = product.title
			.toLowerCase()
			.startsWith(searchTerm.toLowerCase());
		// Filtre par catégorie (si une catégorie est sélectionnée)
		const FilteredCategory =
			searchCategory === "" || product.categoryId.toString() === searchCategory;
		return FilteredTerm && FilteredCategory;
	});

	return (
		<section className="products">
			<h2>Tous nos produits</h2>
			<div className="products-list">
				{filteredProducts.map((product) => {
					return (
						<div key={product.id} className="product">
							<Link to={`/produit/${product.id}`}>
								<div className="product-img">
									<img src={product.image} alt="produit" />
								</div>
								<div className="product-name">{product.title}</div>
							</Link>
							<div className="product-price">
								{product.price}
								<span className="price-decimal"> €</span>
							</div>
							{/* Ajout d'un article au panier via le bouton Ajouter au panier  */}

							<button
								type="button"
								className="product-add"
								onClick={() => setCartProducts([...cartProducts, product.id])}
							>
								Ajouter au panier
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Products;
