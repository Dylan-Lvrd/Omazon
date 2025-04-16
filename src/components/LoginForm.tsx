import { useState } from "react";
import axios from "axios";
import "./LoginForm.scss";
import type { IUser } from "../@types/product";

interface LoginFormProps {
	isConnected: boolean;
	setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoginForm({ isConnected, setIsConnected }: LoginFormProps) {
	const [pseudo, setPseudo] = useState<string | null>(null);
	const [error, setError] = useState("");

	const checkCredentials = async (email: string, password: string) => {
		try {
			const response = await axios.get(
				"https://omazon-server.onrender.com/users",
			);

			const finduser = response.data.find(
				(user: IUser) => user.email === email && user.password === password,
			);

			setPseudo(`${finduser.firstName} ${finduser.lastName}`);
			console.log(pseudo);
			setError("");
			setIsConnected(true);
			console.log(response.data);
		} catch (error) {
			setError("Email ou mot de passe incorrect");
		}
	};

	const handleLogout = () => {
		setIsConnected(false);
		setPseudo(null);
	};

	return (
		<div className="auth-container">
			{isConnected ? (
				<div className="welcome-message">
					<h2>Bienvenue, {pseudo} !</h2>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button className="logout-btn" onClick={handleLogout}>
						Déconnexion
					</button>
				</div>
			) : (
				<form
					className="login-form"
					action={(formData) => {
						const email = formData.get("email") as string;
						const password = formData.get("password") as string;
						checkCredentials(email, password);
					}}
				>
					<label htmlFor="email">Email :</label>
					<input name="email" type="email" required />
					<label htmlFor="password">Mot de passe :</label>
					<input name="password" type="password" required />
					<button type="submit" className="btn">
						Connexion
					</button>
					{error && <p className="error-message">{error}</p>}
				</form>
			)}
		</div>
	);
}

export default LoginForm;
