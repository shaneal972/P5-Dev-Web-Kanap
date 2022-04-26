import { getOneProduct } from "./api.js";
import { renderProduct } from "./rendered.js";

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let item = document.querySelector('.item');

let product = await getOneProduct(id);
renderProduct(product, item);