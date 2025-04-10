
import { ICategory } from '../@types/product';
import './Header.scss'


type HeaderProps = {
    cartProducts: number[];
    categories: ICategory[];
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchCategory: string;
    setSearchCategory: React.Dispatch<React.SetStateAction<string>>

  };

function Header ({cartProducts, categories, searchTerm, setSearchTerm, searchCategory, setSearchCategory  }: HeaderProps){

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
           {/*  Boutons de filtre des catégories */}  
        <select
                    className="header-form-filter"
                    value={searchCategory}
                    onChange={(c) => setSearchCategory(c.target.value)}
                >
                    <option value="">Toutes catégories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
            <input
                type="text"
                className="header-form-input"
                placeholder="Rechercher ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="header-form-button" type="button">
            <img src=".../../public/icons/search.svg" alt="Recherche" className="icon-search" />
            </button>
        </div>
    </div>

    )

}

export default Header