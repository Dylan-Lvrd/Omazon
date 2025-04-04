import './Products.scss'
import product from '../data/products.json'


function Products (){

    return (

        <section className="products">
					<h2>Tous nos produits</h2>
					<div className="products-list">
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/vans.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Sk8-Hi Slim Vans, Baskets mode mixte adulte
							</div>
							<div className="product-price">
								59
								<span className="price-decimal">50 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/surfskate.jpg" alt="produit" />
							</div>
							<div className="product-name">BTFL Cody Surfskate 2024</div>
							<div className="product-price">
								208
								<span className="price-decimal">89 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/lego.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Millennium Falcon™ 75192 | Star Wars
							</div>
							<div className="product-price">
								129
								<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/shaker.jpg" alt="produit" />
							</div>
							<div className="product-name">
								SmartShake Lite DC, 800 ml, Wonderwoman, Shaker
							</div>
							<div className="product-price">
								9<span className="price-decimal">09 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/karcher.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Kärcher Nettoyeur haute pression K 2 Power Control Home
							</div>
							<div className="product-price">
								22
								<span className="price-decimal">15 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/bananes.jpg" alt="produit" />
							</div>
							<div className="product-name">
								2 Pack Sac Banane Femme, Banane Sacoche, Banane
							</div>
							<div className="product-price">
								13
								<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/zelda-totk.jpg" alt="produit" />
							</div>
							<div className="product-name">
								The Legend of Zelda : Tears of the Kingdom - Millenium
							</div>
							<div className="product-price">
								51
								<span className="price-decimal">49 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/bbq.jpg" alt="produit" />
							</div>
							<div className="product-name">BBQ</div>
							<div className="product-price">
								55
								<span className="price-decimal">77 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/bouee.jpg" alt="produit" />
							</div>
							<div className="product-name">Bouée Donut – Multicolore</div>
							<div className="product-price">
								9<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/chaussons.jpg" alt="produit" />
							</div>
							<div className="product-name">
								Mignon Furry Alpaga Peluche Animal Pantoufles Femmes
							</div>
							<div className="product-price">
								18
								<span className="price-decimal">49 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img
									src="./src/img/products/hoddie-pokemon.jpg"
									alt="produit"
								/>
							</div>
							<div className="product-name">
								Pokemon - Pull Plaid à Capuche molletonné Pikachu Pokémon
							</div>
							<div className="product-price">
								13
								<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
						<div className="product">
							<div className="product-img">
								<img src="./src/img/products/cupcakes.jpg" alt="produit" />
							</div>
							<div className="product-name">
								300 Pièces Caissettes Cupcake Antiadhésif, Arc en Ciel
							</div>
							<div className="product-price">
								9<span className="price-decimal">99 €</span>
							</div>
							<button type="button" className="product-add">
								Ajouter au panier
							</button>
						</div>
					</div>
				</section>
    )
}

export default Products;