import type { ICategory, IProduct } from "../@types/product";
import Categories from "./Categories";
import Products from "./Products";

interface HomePagesProps {
	categories: ICategory[];
	cartProducts: number[];
	setCartProducts: React.Dispatch<React.SetStateAction<number[]>>;
	products: IProduct[];
	searchTerm: string;
	searchCategory: string;
}

function HomePage({
	categories,
	cartProducts,
	setCartProducts,
	products,
	searchTerm,
	searchCategory,
}: HomePagesProps) {
	return (
		<main className="main">
			<Categories categories={categories} />
			<Products
				cartProducts={cartProducts}
				setCartProducts={setCartProducts}
				products={products}
				searchTerm={searchTerm}
				searchCategory={searchCategory}
			/>
		</main>
	);
}

export default HomePage;
