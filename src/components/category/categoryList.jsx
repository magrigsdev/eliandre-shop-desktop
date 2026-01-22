import CartItem from "../cartItem.jsx";

/**
 *
 * @param produits
 * @callback onAddProduit
 * @returns {React.JSX.Element}
 * @constructor
 */
const CategoryList = ({ produits, onAddProduit }) => (
    <div className="flex h-full rounded-2xl border border-gray-300 !p-10 w-250">
        <div className="flex flex-wrap justify-center gap-6 w-full">
            {produits.map(produit => (
                <CartItem
                    key={produit._id}
                    image={produit.image}
                    description={produit.description}
                    price={produit.prix}
                    titre={produit.libelle}
                    onClick={onAddProduit}
                />
            ))}
        </div>
    </div>

);

export default CategoryList;
