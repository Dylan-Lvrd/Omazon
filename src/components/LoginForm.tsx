import './LoginForm.scss';

function LoginForm () {
return (
    
<div className="loginForm">
    <form className="loginFormElement">
      <label htmlFor="email">Email :</label>
      <input type="email" className="email" name="email" required />

      <label htmlFor="password">Mot de passe :</label>
      <input type="password" className="password" name="password" required />

      <button className="btn" type="submit">Connexion</button>
    </form>
  </div>

)

}

export default LoginForm