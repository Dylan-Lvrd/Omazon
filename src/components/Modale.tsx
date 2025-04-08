import "./Modale.scss";

interface ModalProps {
	title: string;
	onClose: () => void;
	children: React.ReactNode;
}

function Modal({ title, onClose, children }: ModalProps) {
	console.log("modale");

	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal-header">
					<h2>{title}</h2>
					<button
						className="modal-closeBtn"
						type="button"
						aria-label="Fermer"
						onClick={onClose}
					>
						X
					</button>
				</div>

				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
}

export default Modal;