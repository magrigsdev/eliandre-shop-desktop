import Onglet from './onglet.jsx';
import { Routes } from '../constants/Routes';
import {Texts} from "../Constants/texts.js";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 !mb-4 !mt-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    <div className="text-xl font-bold text-teal-500">
                        {Texts.BRAND}
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Onglet name="Home" to={Routes.HOME} />
                        <Onglet name="Category" to={Routes.CATEGORY} />
                        <Onglet name="Cart" to={Routes.CART} />
                        <Onglet name="Login" to={Routes.LOGIN} />
                        <Onglet name="Register" to={Routes.REGISTER} />
                        <Onglet name="Logout" to={Routes.LOGOUT} />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
