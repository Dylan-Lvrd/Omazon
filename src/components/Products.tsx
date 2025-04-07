import './Products.scss'
import product from '../data/products.json'

type ProductsProps = {
	cartProducts: number[];
	setCartProducts: React.Dispatch<React.SetStateAction<number[]>>;
  };



function Products ({cartProducts, setCartProducts}: ProductsProps){

    return (

        <section className="products">
					<h2>Tous nos produits</h2>
					<div className="products-list">
						
						{product.map((products) => {
							return (
								<div key={products.id} className="product">
							<div className="product-img">
								<img src={`../../public/products/${products.image}`} alt="produit" />
							</div>
							<div className="product-name">{products.title}</div>
							<div className="product-price">
								{products.price}
								<span className="price-decimal"> €</span>
							</div>
							<button
							 type="button"
							  className="product-add"
							  onClick={() => setCartProducts([...cartProducts, products.id])}>
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