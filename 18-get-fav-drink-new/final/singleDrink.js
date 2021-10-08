import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const URLID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const presentDrink = async () => {
    const id = localStorage.getItem('drink');
    if(!id){
        window.location.replace('index.html');
        return;
    }
    const drink = await fetchDrinks(`${URLID}${id}`)
    displayDrink(drink)
}

window.addEventListener('DOMContentLoaded', presentDrink)