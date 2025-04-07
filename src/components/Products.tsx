import './Products.scss'
import product from '../data/products.json'





function Products (){

    return (

        <section className="products">
					<h2>Tous nos produits</h2>
					<div className="products-list">
						
						{product.map((products) => {
							console.log(products)
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
							<button type="button" className="product-add">
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