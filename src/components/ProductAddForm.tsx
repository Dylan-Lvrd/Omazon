import type { IProduct } from "../@types/product";
import "./ProductAddForm.scss";
import tags from "../data/tags.json";
import categories from "../data/categories.json";
import { useState } from "react";
import DOMPurify from "dompurify";

interface ProductsAddFormProps {
	setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
	products: IProduct[];
	onClose: () => void;
}

function ProductAddForm({
	setProducts,
	products,
	onClose,
}: ProductsAddFormProps) {
	const [error, setError] = useState("");

	return (
		<div className="modal">
			<div className="modal-content">
				{/*  Condition de remplissage du formulaire d'ajout d'un produit  */}

				{error && <p className="form-error">{error}</p>}
				<form
					action={(formData) => {
						const title = formData.get("title") as string;
						const image = formData.get("image") as string;
						const priceStr = formData.get("price") as string;
						const categoryId = formData.get("category") as string;
						const tagId = formData.get("tag") as string;

						if (!title || !image || !priceStr || !categoryId || !tagId) {
							setError("Merci de remplir le formulaire");
							return;
						}

						const foundCategory = categories.find(
							(cat) =>
								cat.id === Number.parseInt(formData.get("category") as string),
						);
						const foundTag = tags.find(
							(tag) =>
								tag.id === Number.parseInt(formData.get("tag") as string),
						);

						const maxId = Math.max(...products.map((product) => product.id));

						if (foundCategory && foundTag) {
							const newProduct = {
								id: maxId + 1,
								title: formData.get("title") as string,
								price: Number.parseInt(formData.get("price") as string),
								image: formData.get("image") as string,
								categoryId: foundCategory,
								tag: foundTag,
								description: formData.get("description") as string,
							};

							setProducts([...products, newProduct]);
							setError("");
							onClose();
						}
					}}
				>
					<label htmlFor="name">Nom du produit</label>
					<input
						type="text"
						id="name"
						name="title"
						placeholder="Entrez le nom du produit"
					/>

					<label htmlFor="image">URL de l'image</label>
					<input
						type="text"
						id="image"
						name="image"
						placeholder="https://..."
					/>

					<label htmlFor="price">Prix (€)</label>
					<input
						type="number"
						id="price"
						name="price"
						placeholder="0.00"
						step="0.01"
					/>

					<div className="row">
						<div className="select-wrapper">
							<label htmlFor="category">Catégorie</label>
							<select id="category" name="category">
								{categories.map((category) => {
									return (
										<option key={category.id} value={category.id}>
											{category.title}
										</option>
									);
								})}
							</select>
						</div>

						<div className="select-wrapper">
							<label htmlFor="tag">Tag</label>
							<select id="tag" name="tag">
								{tags.map((tag) => {

									/* Interprétation du code HTML */

									const safeTagText = DOMPurify.sanitize(tag.text);
									return (
										<option
											key={tag.id}
											value={tag.id}
											// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
											dangerouslySetInnerHTML={{ __html: safeTagText }}
										/>
									);
								})}
							</select>
						</div>
					</div>

					<button className="btn-add" type="submit">
						Ajouter
					</button>
				</form>
			</div>
		</div>
	);
}

export default ProductAddForm;
