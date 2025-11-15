import '../styles/bienvenue.css'
import bienvenue from '../assets/bienvenue.jpg'


const Bienvenue =  () => {
    return (
    <div className="container">
        <div className="card">

            <div className="logoox">
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
                alt="logo" className="logo"/>
            </div>

            <h2>Bienvenue sur Eliandre shop</h2>

            <p className="subtitle">
                Découvrez Eliandre Shop, votre boutique en ligne dédiée à l’élégance et à la beauté.
            </p>

            <img src={bienvenue} 
            alt="illustration" className="illustration"/>

            <button className="btn">Commencez</button>

        </div>
    </div>)
}
export default Bienvenue