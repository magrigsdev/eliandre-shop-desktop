
//import React, { useEffect } from 'react'
//import { useNavbar } from '../hooks/useNavbar.js'
import UserCard from "../components/userCard.jsx";
import Body from "../components/Body.jsx";
import Image from "../components/Image.jsx";

import React from "react";
import useApp from "../hooks/useApp.js";
import {Texts} from "../Constants/texts.js";
import Title from "../components/title.jsx";
import {useNavigate} from "react-router-dom";
import {Boutton} from "../components/boutton.jsx";

//import {useLocation} from "react-router-dom";

const Logout = () => {
    const { user, setUser, setIsLogin } = useApp();
    const route = useNavigate() // route manage
    //const navigate = useNavigate();
    console.log(user);
    // Construction du message de bienvenue
    const nomComplet = user ? `${user.Prenom} ${user.Nom}` : "Utilisateur";
    const message = `${Texts.WELCOME} ${nomComplet}`;

    const handleLogout = () => {

        // 2. Vider l'état Global de l'App
        setUser(null);
        setIsLogin(false);

        // 3. Rediriger vers l'accueil ou le login
        route('/login');
    };

    return (
        <Body
            Bloc1={
                <div className="text-center p-4">
                    <Title title={message} />
                </div>
            }
            Bloc2={
                <UserInfoCard user={user} onLogout={handleLogout} />
            }
        />
    );
};

// Un sous-composant pour afficher les détails et le bouton
const UserInfoCard = ({ user, onLogout }) => {
    if (!user) return <p>Aucun utilisateur connecté.</p>;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto border border-gray-100">
            <div className="flex flex-col items-center">
                {/* Avatar si tu as une image, sinon initiale */}


                <h3 className="text-xl font-bold text-gray-800">{user.Prenom} {user.Nom}</h3>
                <p className="text-gray-500 mb-6">{user.Email}</p>

                <Boutton type='restore' value='Se déconnecter' size='50' restore='true' onClick={onLogout} />
            </div>
        </div>
    );
};

export default Logout;