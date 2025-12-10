
const Inscription = () => {
    return (<>
                <style>
                    {`
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: "Roboto", sans-serif;
                        }

                        body {
                            background: #ffffff;
                            display: flex;
                            justify-content: center;
                            padding: 30px;
                            color: #222;
                        }

                        /* ---------- HEADER ---------- */
                        .page-container {
                            width: 100%;
                        }

                        .header {
                            display: flex;
                            align-items: center;
                            gap: 30px;
                            margin-bottom: 25px;
                        }

                        .logo {
                            width: 160px;
                        }

                        .header-text h2 {
                            font-size: 20px;
                            font-weight: 700;
                            margin-top:90px;
                        }

                        .header-text p {
                            font-size: 13px;
                            margin-top: 5px;
                            color: #555;
                        }

                        /* ---------- FORM ---------- */
                        .form-container {
                            background: #ffffff;
                            border-radius: 12px;
                            padding: 40px;
                            display: flex;
                            justify-content: space-between;
                            gap: 60px;
                            box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
                        }

                        .left-form,
                        .right-form {
                            width: 45%;
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                        }

                        label {
                            font-size: 13px;
                            font-weight: 600;
                            color: #555;
                        }

                        input {
                            width: 100%;
                            padding: 10px 14px;
                            border-radius: 20px;
                            border: 1px solid #ddd;
                            margin-top: 5px;
                            outline: none;
                            background-color:white;
                            color: #555;
                        }

                        input:focus {
                            border-color: #00a39b;
                        }

                        .error {
                            color: #d9534f;
                            font-size: 12px;
                            margin-bottom: 10px;
                        }

                        /* ---------- BUTTONS ---------- */
                        .buttons {
                            margin-top: 20px;
                            display: flex;
                            gap: 20px;
                        }

                        .save-btn {
                            background: teal;
                            color: white;
                            padding: 10px 30px;
                            border: none;
                            border-radius: 20px;
                            cursor: pointer;
                            width:60%;
                        }

                        .back-btn {
                            background: #e74c3c;
                            color: white;
                            padding: 10px 30px;
                            border: none;
                            border-radius: 20px;
                            cursor: pointer;
                            width:60%;
                        }

                        .save-btn:hover {
                            background: #028a84;
                        }

                        .back-btn:hover {
                            background: #c0392b;
                        }
                        .down_text {
                            color: #555;
                            font-size: 12px;
                            margin-bottom: 10px;
                        }
                        .down_text_sub {
                            color: teal;
                            font-size: 12px;
                            margin-bottom: 10px;
                            text-decoration:'none';
                            font-weight: 700;
                        }

                    `}
                </style>
                <div className="page-container">

        
                    <div className="header">
                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Eliandre Shop Logo" className="logo" />
                        <div className="header-text">
                            <h2>Bienvenue sur Eliandre shop</h2>
                            <p>Créez votre profil pour découvrir nos perruques, conseils beauté et nouveautés tendance.</p>
                        </div>
                    </div>

       
                    <div className="form-container">

                        <div className="left-form">

                            <label>Nom</label>
                            <input type="text" placeholder="banzouzi" required />

                            <span className="error">Nom est requis</span>

                            <label>Prénom</label>
                            <input type="text" placeholder="andréa" required/>

                            <span className="error">Prénom est requis</span>

                            <label>Téléphone</label>
                            <input type="text" placeholder="Entrer le numéro" required/>

                            <span className="error">Le numéro est requis</span>

                        </div>

                        <div className="right-form">

                            <label>Mot de passe</label>
                            <input type="password" placeholder="••••••••" required/>

                            <span className="error">Mot de passe requis</span>

                            <label>Confirmation de mot de passe</label>
                            <input type="password" placeholder="••••••••" required />

                            <span className="error">Les mots de passe ne correspondent pas</span>

                            <div className="buttons">
                                <button className="save-btn">Enregistrer</button>
                                <button className="back-btn">Retour</button>
                            </div>
                            <div>
                                <span className="down_text">Déjà un compte 
                                <a className="down_text_sub"> Se connecter</a>
                                </span>
                            </div>

                        </div>
                        

                    </div>

                </div>
            </>)
}
export default Inscription