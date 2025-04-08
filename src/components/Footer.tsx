import './Footer.scss'



interface FooterProps {
	handleOpenModal: () => void; // Prop pour ouvrir la modale
  }

function Footer ({handleOpenModal}: FooterProps){

    return (
        <footer className="footer">
				<div className="footer-top">
					<a href="#top">Retour en haut</a>
				</div>

				<div className="footer-main">
					<h3>Vous aussi gagnez de l'argent avec Omazon !</h3>
					<p>Transformez vos passions en revenus.</p>
					<p>Rejoingnez notre communautée de vendeurs dès aujourd'hui !</p>
					<button className="footer-main-btn" type="button" onClick={handleOpenModal}>
						Devenez vendeurs sur Omazon
					</button>
				</div>

				<div className="footer-logo">
				<img className="logo" src=".../../public/logos/omazon.svg" alt="omazon" />
				</div>

				<div className="footer-legals">
					<div className="legals-links">
						<a href="/conditions">Conditions générales de vente</a>
						<a href="/me">Vos informations personnelles</a>
						<a href="/cookies">Cookies</a>
						<a href="/ads">Annonces basées sur vos centres d'interêts</a>
					</div>
					<div className="legals-credits">
						@2024 Omazon, un clone simplifié d'Amazon
					</div>
				</div>
			</footer>
    )
}

export default Footer ;