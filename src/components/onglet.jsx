
const  Onglet = ({name, active= false, onClick}) => {

        return (
            <a
                onClick={()=>console.log('')}
                className={`hover:text-teal-600 font-medium transition-colors !mx-4 
                ${active  ? "text-teal-600" : "text-gray-600 " }`}
                href="#">
                {name}
            </a>
        );

}

export default Onglet;