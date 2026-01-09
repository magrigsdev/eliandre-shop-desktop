
const  Onglet = ({name, actived= false, onNavigate}) => {

        return (
            <a
                onClick={actived ? undefined : onNavigate }
                aria-disabled={actived}
                className={`hover:text-teal-600 font-medium transition-colors !mx-4 
                ${actived  ? "text-teal-600" : "text-gray-600 " }`}
                href="">
                {name}
            </a>
        );

}

export default Onglet;