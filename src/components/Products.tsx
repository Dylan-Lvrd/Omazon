import './Products.scss'
import { IProduct } from '../@types/product';


interface ProductsProps  {
	cartProducts: number[];
	setCartProducts: React.Dispatch<React.SetStateAction<number[]>>;
	products : IProduct[];

  };

function Products ({cartProducts, setCartProducts, products }: ProductsProps){

    return (

        <section className="products">
					<h2>Tous nos produits</h2>
					<div className="products-list">
						
						{products.map((product) => {
							return (
								<div key={product.id} className="product">
							<div className="product-img">
								<img src={`../../public/products/${product.image}`} alt="produit" />
							</div>
							<div className="product-name">{product.title}</div>
							<div className="product-price">
								{product.price}
								<span className="price-decimal"> €</span>
							</div>
							<button
							 type="button"
							  className="product-add"
							  onClick={() => setCartProducts([...cartProducts, product.id])}>
								Ajouter au panier
							</button>
						</div>

							)
						})}
					</div>
				</section>
    )
}

export default Products;