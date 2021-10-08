import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
    hideLoading();
    const drink = data.drinks[0];
    const {strDrinkThumb:image, strDrink:name, strInstructions:desc} = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
    ]
    const img = getElement('.drink-img');
    const drinkName = getElement('.drink-name')
    const description = getElement('.drink-desc')
    const ingredients = getElement('.drink-ingredients')

    img.src = image;
    drinkName.textContent = name;
    document.title = name;
    description.textContent = desc;
    ingredients.innerHTML = list.map((ing) => {
        if(ing)
            return `<li><i class="far fa-check-square"></i>${ing}</li>`;
        return;
    }).join('')
}

export default displayDrink;