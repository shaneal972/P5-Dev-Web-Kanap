// Permet de définir les fonctions pour requêter l'API

let erreur = document.querySelector('.error');
let product = [];


// L'url pour accéder à l'API
const URL_API = "http://localhost:3000/api/products/";


/**
 * Permet de récupérer tous les produits 
 * @return Promise 
 */
async function getAllProducts() {
    try {
        //Récupération de la réponse de l'API après le GET
        const response = await fetch(URL_API);
        //transformation de la réponse en json
        let products = await response.json();
        //Retourne une "Promise"
        return products;
    } catch (error) {
        erreur.innerHTML = `L'erreur <strong> ${error.message} </strong> est survenue, nous essayons de la régler au plus vite !!! `;
        erreur.style.display = 'block';
    }
}

/**
 * Permet de récupérer un produit selon son id
 * @param {String} id L'id du produit
 */
async function getOneProduct(id) {
    try {
        const response = await fetch(URL_API + id);
        let product = await response.json();
        return product
    } catch (error) {
        console.log("Une erreur s'est produite ", error.message);
    }
       
}

export {
    getAllProducts,
    getOneProduct
};