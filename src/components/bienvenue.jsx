import { useLocation, useNavigate } from 'react-router-dom'
import bienvenue from '../assets/bienvenue.jpg'
//import '../styles/bienvenue.css'
import { useEffect } from 'react'
import { useNavbar } from '../hooks/useNavbar'

const Bienvenue =  () => {
    const route = useNavigate()
    //uptdate location
    const {pathname} = useLocation()
    //useNavbar
    const {setLocation} = useNavbar()
    useEffect(()=>{setLocation(pathname)})

    //test
    // console.log("page welcome", location)
    
    return (
        <>
            <p className="text-red-600">
                Lorem ipsum... le red color
            </p>
            <div className="container">
                <div className="card">

                    <div className="logoox">
                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                             alt="logo" className="logo"/>
                    </div>

                    <h2>Bienvenue sur Eliandre shop </h2>

                    <p className="subtitle">
                        Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.
                    </p>

                    <img src={bienvenue}
                         alt="illustration" className="illustration"/>

                    <button className="btn" onClick={() => route('/connexion')}>Commencez</button>

                </div>
            </div>
        </>

    )
}
export default Bienvenue


