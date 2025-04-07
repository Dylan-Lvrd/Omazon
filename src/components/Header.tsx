import './Header.scss'
import '../../public/logos/omazon.svg'

type HeaderProps = {
    cartProducts: number[];
  };


function Header ({cartProducts}: HeaderProps){

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
            <button className="header-form-filter" type="button">
                Toutes nos catégories
                <img src=".../../public/icons/caret-down.svg" alt="flèche bas" className="icon-caret-down" />
            </button>
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