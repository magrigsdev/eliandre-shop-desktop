
const Footer = () => 
    {
        let year =  new Date().getFullYear()
        
        return (<>
            <footer className=" text-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-12 flex justify-center items-center">

                    <div className="max-w-7xl  !py-4">

                        <p>&copy; {year} Eliandre Cops. Tous droits réservés.</p>
                    </div>

                </div>

            </footer>


        </>)
    }
export default Footer