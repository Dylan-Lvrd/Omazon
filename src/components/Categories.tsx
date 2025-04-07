import './Categorie.scss'
import categorie from '../data/categories.json'


function Categories (){
    return (
        <section className="categories">
					<h2 className="categories-title">Catégories à l'honneur</h2>
					<div className="categories-list">

						{categorie.map((categories) => {
							return (
								<div key={categories.id} className="category">
							<div className="category-img">
								<img
									src={`../../public/categories/${categories.image}`}
									alt="produit"
								/>
							</div>
							<div className="category-name">{categories.title}</div>
						</div>

							)
						})}
						
					</div>
				</section>
    )
}

export default Categories;