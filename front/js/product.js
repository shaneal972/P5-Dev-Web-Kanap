import { getOneProduct } from "./api.js";
import { renderProduct } from "./rendered.js";
import { addProductToCart, cartInStorage } from "./utils.js";



//Variables 
let params, id, item, btnAddToCart;
let cart = [];
let panierInStorage = cartInStorage();
let productToAdd;
let productInCart = [];
if (panierInStorage){
    productInCart = localStorage.getItem('panier');
    console.log(productInCart);
}


//Récupération de l'id depuis l'url 
params = new URLSearchParams(document.location.search);
id = params.get("id");

//Récupération de la section qui a la classe "item"
item = document.querySelector('.item');

//Vérifier si le panier existe dans le localstorage


//Récupération d'un produit en passant l'id à la fonction getOneProduct
let product = await getOneProduct(id);

//Affichage d'un produit dans la page HTML : product.html
renderProduct(product, item);

//Eléments du document
let inputQty = document.querySelector("#quantity");
btnAddToCart = document.querySelector("#addToCart"); //Récupération du bouton "Ajouter au panier"
let select = document.querySelector('#colors');


// Ajout d'un évènement click sur le bouton "Ajouter au panier"
btnAddToCart.addEventListener("click", () => {
    //Récupérer la quantité du produit
    let qty = Number(inputQty.value);
    //Récupérer la couleur du produit
    let color = select.value;
    //Produit à ajouter au panier
    productToAdd = {
        id: id,
        qte: qty,
        color: color
    };
    console.log('test', productToAdd);
    
    //Vérifier si le panier existe dans le localStorage
    if (panierInStorage) {
        //Vérifier si le produit est dans le panier
        //Parcourir les produits du panier
        for (const p in cart) {
            if (productToAdd.id === p.id && productToAdd.color === p.color) {
                p.qte += productToAdd.qte; 
            } else {
                //Ajout du produit dans le tableau cart
                productInCart.push(productToAdd);
                console.log(productInCart);
                localStorage.setItem('panier', JSON.stringify(productInCart));
            }
        }
        
    } else {
        localStorage.setItem('panier', JSON.stringify(productInCart));
    }

    //SINON Ajouter le produit au panier
    //SI OUI Mettre à jour la quantité

    addProductToCart(productToAdd);
});