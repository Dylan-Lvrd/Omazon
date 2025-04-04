import './Header.scss'

function Header (){

    return (
        <div className="header">
        <div className="header-logo">
            <img src="./src/img/logo.png" alt="omazon" />
        </div>
        <a href="/account" className="header-account">
            Bonjour, identifiez-vous
            <div className="link--bold">
                Compte et listes <span className="icon-caret-down" />
            </div>
        </a>
        <a href="/cart" className="header-cart">
            <div className="header-cart-count">
                <span className="header-cart-count-number">0</span>
                <span className="icon-cart" />
            </div>
            <div className="header-cart-title">Panier</div>
        </a>
        <div className="header-form">
            <button className="header-form-filter" type="button">
                Catégories <span className="icon-caret-down" />
            </button>
            <input
                type="text"
                className="header-form-input"
                placeholder="Rechercher ..."
            />
            <button className="header-form-button" type="button">
                <span className="icon-search" />
            </button>
        </div>
    </div>

    )

}

export default Header