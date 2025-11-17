
const Connexion = () => {
   return (<>
        <style>
            {`    
                body {
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }         
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100%;
                    font-familly: 'roboto'
                }

                .card {
                    background: #fff;
                    width: 750px;
                    display: flex;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    gap: 40px;
                }

                .left, .right {
                    flex: 1;
                    text-align: center;
                }

                .left .logo {
                    width: 200px;
                    margin-bottom: 10px;
                    height: 200px;
                }
                h2{
                    font-size: 13pt;
                    color: #555;
                    margin-bottom:20px;
                }

                .brand {
                    color: #009688;
                    font-size: 26px;
                    font-weight: 600;
                }

                .slogan {
                    font-size: 13px;
                    color: #555;
                }

                .right h3 {
                    font-size: 17px;
                    font-weight: 600;
                }

                .desc {
                    font-size: 12px;
                    color: #777;
                    margin-bottom: 25px;
                }

                .form {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .form input {
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 50px;
                    outline: none;
                    font-size: 13px;
                    background-color: #fff;
                    color: #555;
                }

                .form input:focus {
                    border-color: #009688;
                }

                .error {
                    color: red;
                    font-size: 12px;
                    text-align: left;
                    padding-left: 15px;
                }

                button {
                    margin-top: 10px;
                    padding: 12px;
                    border: none;
                    background: #009688;
                    color: white;
                    border-radius: 50px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: 0.3s;
                }

                button:hover {
                    background: #00796b;
                }

                .signup {
                    font-size: 12px;
                    margin-top: 10px;
                    color: #555;
                }

                .signup a {
                    color: #009688;
                    text-decoration: none;
                    font-weight: 600;
                }

                .signup a:hover {
                    text-decoration: underline;
                }

                /* Responsive */
                @media (max-width: 750px) {
                    .card {
                        flex-direction: column;
                        width: 90%;
                        padding: 20px;
                    }
                }
                label {
                            font-size: 13px;
                            font-weight: 600;
                            color: #555;
                            text-align: left;
                        }
            `}
        </style>
    
        <div class="container">
        <div class="card">

            <div class="left">
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
                alt="EliandreShop Logo" 
                class="logo" />
            </div>

            <div class="right">
                <h2>Bienvenue sur Eliandre shop</h2>
                <p class="desc">
                    Découvrez Eliandre Shop, votre boutique en ligne dédiée
                    à l'élégance et à la beauté.
                </p>

                <form class="form">
                    <label>Nom</label>
                    <input type="email" placeholder="Email" />
                    <span class="error">Email incorrect ou invalid</span>

                    <label>Mot de passe </label>
                    <input type="password" placeholder="••••••••" />
                    <span class="error">Email incorrect ou invalid</span>

                    <button type="submit">Commencer</button>
                </form>

                <p class="signup">
                    Pas de compte ? <a href="#">S’inscrire</a>
                    
                </p>
            </div>

        </div>
    </div>
   </>
    
   ) 
}
export default Connexion