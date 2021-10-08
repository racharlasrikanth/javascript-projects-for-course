import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
    // show loading
    showLoading();
    try {
        const data = await fetch(url);
        const response = await data.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export default fetchDrinks