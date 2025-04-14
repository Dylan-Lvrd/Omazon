import { useEffect, useRef } from 'react';
import './LoginForm.scss';





function LoginForm () {

  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect (()=>{
    inputRef.current?.focus()
  }, []
  )
  
return (

  
    
<div className="loginForm">
    <form className="loginFormElement">
      <label htmlFor="email">Email :</label>
      <input ref={inputRef} type="email" className="email" name="email" required />

      <label htmlFor="password">Mot de passe :</label>
      <input type="password" className="password" name="password" required />

      <button className="btn" type="submit">Connexion</button>
    </form>
  </div>

)

}

export default LoginForm