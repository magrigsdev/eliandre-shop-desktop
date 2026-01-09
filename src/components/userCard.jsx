
const UserCard = ({ nom, prenom, telephone, onLogout }) => {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md !p-6 border">

            {/* Avatar */}
            <div className="flex items-center gap-4 !mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg">
                    {prenom?.[0]}
                    {nom?.[0]}
                </div>

                <div>
                    <p className="text-lg font-semibold text-gray-800">
                        {prenom} {nom}
                    </p>
                    <p className="text-sm text-gray-500">
                        nom
                    </p>
                </div>
            </div>

            {/* Infos */}
            <div className="space-y-2 text-sm text-gray-700 mb-6">
                <p>
                    <span className="font-medium">Téléphone :</span>{" "}
                    {telephone}
                </p>
            </div>

            {/* Bouton déconnexion */}
            <button
                onClick={onLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition"
            >
                Déconnexion
            </button>
        </div>
    );
};

export default UserCard;
