import '../styles/footer.css'
const Footer = () => 
    {
        let year =  new Date().getFullYear()
        
        return (<>

            <nav class="footer">
                <div class="dividers"></div>
                <span class="footer-container">
                   
                    <p>&copy; { year }  Eliandre. Tous droits réservés.</p>
                </span>
                
            </nav>
        </>)
    }
export default Footer