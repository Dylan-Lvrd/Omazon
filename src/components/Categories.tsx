import './Categorie.scss'
import type { ICategory } from '../@types/product';

interface CategoriesProps {
	categories: ICategory[];
  }

function Categories ({categories}: CategoriesProps){
    return (
        <section className="categories">
					<h2 className="categories-title">Catégories à l'honneur</h2>
					<div className="categories-list">

						{categories.map((categorie) => {
							return (
								<div key={categorie.id} className="category">
							<div className="category-img">
								<img
									src={categorie.image}
									alt="produit"
								/>
							</div>
							<div className="category-name">{categorie.title}</div>
						</div>

							)
						})}
						
					</div>
				</section>
    )
}

export default Categories;