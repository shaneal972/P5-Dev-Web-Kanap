/**
 * Permet de créer les options de ma balise select 
 * @param {Array} colors 
 * @returns 
 */
function optionColors(colors) {
    let select = document.querySelector('#colors');
    for (let i = 0; i < colors.length; i++){
        let option = new Option(colors[i], colors[i]);
        select.appendChild(option);
    }
}

/**
 * Permet d'ajouter un produit dans le panier
 * @param {Object} produit Produit à ajouter dans le panier
 */
function addProductToCart(produit) {
    console.log(produit);

}

/**
 * Permet de vérifier si le panier existe dans le localStorage
 * @returns {Boolean}
 */
function cartInStorage() {
    if (localStorage.getItem('panier')) {
        return true;
    } else {
        return false;
    }
}






export {
    optionColors,
    addProductToCart,
    cartInStorage
};