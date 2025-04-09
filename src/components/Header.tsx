
import { ICategory } from '../@types/product';
import './Header.scss'


type HeaderProps = {
    cartProducts: number[];
    categories: ICategory[];
    CategoriesOpen: boolean;
    toggleCategories: () => void;


  };

function Header ({cartProducts, categories, CategoriesOpen, toggleCategories }: HeaderProps){

    return (
        <div className="header">
        <div className="header-logo">
            <img className="logo" src=".../../public/logos/omazon.svg" alt="omazon" />
        </div>
        <a href="/account" className="header-account">
            Bonjour, identifiez-vous
            <div className="link--bold">
                Compte et listes <span className="icon-caret-down" />
            </div>
        </a>
        <a href="/cart" className="header-cart">
            <div className="header-cart-count">
                <span className="header-cart-count-number">{cartProducts.length}</span>
                <img src=".../../public/icons/cart.svg" alt="Panier" className="icon-cart" />
            </div>
            <div className="header-cart-title">Panier</div>
        </a>
        <div className="header-form">
            <button className="header-form-filter" type="button" onClick={toggleCategories} >
                Toutes nos catégories
                <img src=".../../public/icons/caret-down.svg" alt="flèche bas" className="icon-caret-down" />
            </button>
            {CategoriesOpen && (
                        <div className="categories-open">
                            {categories.map((category) => (
                                <div 
                                    key={category.id} 
                                    className="categories-item"
                                >
                                    {category.title}
                                </div>
                            ))}
                        </div>
            )}
            <input
                type="text"
                className="header-form-input"
                placeholder="Rechercher ..."
            />
            <button className="header-form-button" type="button">
            <img src=".../../public/icons/search.svg" alt="Recherche" className="icon-search" />
            </button>
        </div>
    </div>

    )

}

export default Header