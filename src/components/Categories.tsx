import './Categorie.scss'
import categorie from '../data/categories.json'


function Categories (){
    return (
        <section className="categories">
					<h2 className="categories-title">Catégories à l'honneur</h2>

				
					<div className="categories-list">
						<div className="category">
							<div className="category-img">
								<img src="./src/img/categories/animalerie.jpg" alt="produit" />
							</div>
							<div className="category-name">Animalerie</div>
						</div>
						<div className="category">
							<div className="category-img">
								<img
									src="./src/img/categories/beaute-et-parfum.png"
									alt="produit"
								/>
							</div>
							<div className="category-name">Beauté</div>
						</div>
						<div className="category">
							<div className="category-img">
								<img src="./src/img/categories/livres.jpg" alt="produit" />
							</div>
							<div className="category-name">Livres</div>
						</div>
						<div className="category">
							<div className="category-img">
								<img src="./src/img/categories/bricolage.jpg" alt="produit" />
							</div>
							<div className="category-name">Bricolage</div>
						</div>
					</div>
				</section>
    )
}

export default Categories;