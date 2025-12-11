import '../styles/footer.css'
const Footer = () => 
    {
        let year =  new Date().getFullYear()
        
        return (<>

            <nav className="footer">
                <div className="dividers"></div>
                <span className="footer-container">
                   
                    <p>&copy; { year }  Eliandre. Tous droits réservés.</p>
                </span>
                
            </nav>
        </>)
    }
export default Footer