// imports

import getElement from "./getElement.js";

// present drinks will do fetching and diplaying drinks
import presentDrinks from "./presentDrinks.js"

const BASEURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const form = getElement('.search-form');
const input = getElement('input[name]')

form.addEventListener('keyup', function(e){
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    presentDrinks(`${BASEURL}${value}`)
})