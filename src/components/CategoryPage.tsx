import type { ICategory, IProduct } from "../@types/product";
import { Link, useParams } from "react-router";
import "./CategoryPage.scss";
import "./Products.scss";

interface ProductsProps {
	cartProducts: number[];
	setCartProducts: React.Dispatch<React.SetStateAction<number[]>>;
	products: IProduct[];
	categories: ICategory[];
}

function CategoryPage({
	cartProducts,
	setCartProducts,
	products,
	categories,
}: ProductsProps) {
    
	// On récupère le slug depuis l'URL
	const { slug } = useParams();

	// On trouve la catégorie correspondante
	const category = categories.find((cat) => cat.slug === slug);

	// On filtre les produits de cette catégorie
	const categoryProducts = products.filter(
		(product) => product.categoryId === category?.id,
	);

	return (
		<div className="category-page">
			<h1 className="category-title">{category?.title}</h1>
			<div className="products-list">
				{categoryProducts.map((product) => (
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
						<button
							type="button"
							className="product-add"
							onClick={() => setCartProducts([...cartProducts, product.id])}
						>
							Ajouter au panier
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default CategoryPage;
