import Onglet from './onglet.jsx';
import { Routes } from '../constants/Routes';
import {Texts} from "../Constants/texts.js";
import useApp from "../hooks/useApp.js";

const Navbar = () => {
    // Récupération de l'état de connexion global depuis le contexte de l'application
    const { isLogin } = useApp();

    // Debug : affiche dans la console si l'utilisateur est reconnu comme connecté ou non
    console.log("isLogin : ", isLogin);

    return (
        // Structure principale de la barre de navigation avec bordure basse et marges forcées
        <nav className="bg-white border-b border-gray-200 !mb-4 !mt-4">
            {/* Conteneur centré avec une largeur maximale définie */}
            <div className="max-w-7xl mx-auto px-6">
                {/* Alignement flexible : Logo à gauche et liens à droite, hauteur fixe de 16 (64px) */}
                <div className="flex justify-between items-center h-16">

                    {/* Affichage du nom de la marque (Eliandre Shop) stylisé en bleu-vert */}
                    <div className="text-xl font-bold text-teal-500">
                        {Texts.BRAND}
                    </div>

                    {/* Liens de navigation : cachés sur mobile, affichés en flex sur écrans moyens (md) */}
                    <div className="hidden md:flex space-x-8">
                        {/* Onglets permanents accessibles à tous */}
                        <Onglet name="Home" to={Routes.HOME} />
                        <Onglet name="Category" to={Routes.CATEGORY} />
                        <Onglet name="Cart" to={Routes.CART} />

                        {/* Affichage conditionnel : n'affiche 'Login' que si l'utilisateur n'est PAS connecté */}
                        {isLogin === false ? <Onglet name="Login" to={Routes.LOGIN} /> : '' }

                        {/* Affichage conditionnel : n'affiche 'Register' que si l'utilisateur n'est PAS connecté */}
                        {isLogin === false ? <Onglet name="Register" to={Routes.REGISTER} /> : '' }

                        {/* Onglet de déconnexion (Pourrait aussi être conditionnel à isLogin == true) */}
                        <Onglet name="Logout" to={Routes.LOGOUT} />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
