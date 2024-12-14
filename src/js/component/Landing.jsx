import React from "react";
 
function Landing (){
    return(

        <div>
            <div className="card"> <h2>Signup</h2> <form> <div className="form-group"> <label htmlFor="signup-username">Username</label> <input type="text" id="signup-username" name="username" required /> </div> <div className="form-group"> <label htmlFor="signup-email">Email</label> <input type="email" id="signup-email" name="email" required /> </div> <div className="form-group"> <label htmlFor="signup-password">Password</label> <input type="password" id="signup-password" name="password" required /> </div> <div className="form-group"> <label htmlFor="signup-confirm-password">Confirm Password</label> <input type="password" id="signup-confirm-password" name="confirm-password" required /> </div> <div className="form-group"> <label htmlFor="signup-country">País</label> <input type="text" id="signup-country" name="country" required /> </div> <div className="form-group"> <label htmlFor="signup-city">Ciudad</label> <input type="text" id="signup-city" name="city" required /> </div> <div className="form-group"> <label htmlFor="signup-birthdate">Fecha de Nacimiento</label> <input type="date" id="signup-birthdate" name="birthdate" required /> </div> <div className="form-group"> <input type="checkbox" id="signup-terms" required /> <label htmlFor="signup-terms"> Acepto las <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Políticas de Privacidad</a> y los <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Términos de Servicio</a> </label> </div> <div className="form-actions"> <button type="submit">Signup</button> </div> </form> </div>
        </div>

    );
};

export default Landing;