import Onglets from '../components/Onglets';
import { Routes } from '../constants/Routes';

const Navbars = () => {
    return (
        <nav className="bg-white border-b border-gray-200 mb-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    <div className="text-xl font-bold text-teal-500">
                        Eliandre Shop
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Onglets name="Home" to={Routes.HOME} />
                        <Onglets name="Category" to={Routes.CATEGORY} />
                        <Onglets name="Cart" to={Routes.CART} />
                        <Onglets name="Login" to={Routes.LOGIN} />
                        <Onglets name="Register" to={Routes.REGISTER} />
                        <Onglets name="Logout" to={Routes.LOGOUT} />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbars;
