import React, {Component} from 'react';
import homeImage from "../assets/accueil.jpg"
import {Texts} from "../Constants/texts.js";
import Body from "../components/Body.jsx";
import Title from "../components/title.jsx";
import Image from "../components/Image.jsx";

const Home  = () => {
    //initiation des variables

        return (<>
            <Body
                Bloc1={<Title
                    title={Texts.WELCOME} />}
                Bloc2={<Image src={homeImage}  />}
            />

        </>);
}
export default Home
