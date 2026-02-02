import React, {Component} from 'react';
import homeImage from "../assets/accueil.jpg"
import {Texts} from "../Constants/texts.js";
import Body from "../components/Body.jsx";
import Title from "../components/title.jsx";
import Image from "../components/Image.jsx";
import useApp from "../hooks/useApp.js";

const Home  = () => {
    //initiation des variables
    const { user} = useApp()
    let nom = user.Nom || '' // si user.nom est undefined affiche rien
    let message  = nom + ' ' + Texts.WELCOME;
        return (<>
            <Body
                Bloc1={
                    <Title
                    title={message} />}
                Bloc2={<Image src={homeImage}  />}
            />

        </>);
}
export default Home
