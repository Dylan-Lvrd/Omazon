import { useParams } from "react-router";
import type { IProduct } from "../@types/product";
import "./ProductPage.scss";
import DOMPurify from "dompurify";

interface ProductPageProps {
	products: IProduct[];
}

function ProductPage({ products }: ProductPageProps) {
	// On récupère l'id depuis l'URL
	const { id } = useParams<{ id: string }>();
	// On trouve le produit correspondant
	const product = products.find((p) => p.id === Number(id));
	console.log(product);

	// Interpretation des balise HTML
	let safeProductDescription = "";
	if (product) {
		safeProductDescription = DOMPurify.sanitize(product.description);
	}

	return (
		<div className="article-presentation">
			<div className="article-image">
				<img src={product?.image} alt="Article" />
			</div>

			<div className="article-details">
				<h1 className="article-title">{product?.title}</h1>

				<p className="article-price">Prix : {product?.price} €</p>

				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="add-to-cart">Ajouter au panier</button>

				<div className="article-description">
					<h2>Présentation :</h2>

					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
					<div dangerouslySetInnerHTML={{ __html: safeProductDescription }} />
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
