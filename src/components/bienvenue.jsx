import { useNavigate } from 'react-router-dom'
import bienvenue from '../assets/bienvenue.jpg'
import '../styles/bienvenue.css'

const Bienvenue =  () => {
    const route = useNavigate()
    return (
        <>
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

                    <button className="btn" onClick={()=>route('/inscription')}>Commencez</button>

                </div>
            </div>
        </>
    
    )
}
export default Bienvenue


