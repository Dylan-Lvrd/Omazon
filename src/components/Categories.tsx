import "./Categorie.scss";
import type { ICategory } from "../@types/product";
import { Link } from "react-router";

interface CategoriesProps {
	categories: ICategory[];
}

function Categories({ categories }: CategoriesProps) {
	return (
		<section className="categories">
			<h2 className="categories-title">Catégories à l'honneur</h2>
			<div className="categories-list">
				{categories.map((categorie) => {
					return (
						// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
						<Link key={categorie.id} to={`/categorie/${categorie.slug}`}>
							<div  className="category">
								<div className="category-img">
									<img src={categorie.image} alt="produit" />
								</div>
								<div className="category-name">{categorie.title}</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default Categories;
