const setDrink = (section) => {
    section.addEventListener('click', function(e){
        // e.preventDefault();
        let id = e.target.parentElement.dataset.id;
        if(e.target.classList.contains('search-picture-icon')){
            id = e.target.parentElement.parentElement.dataset.id;
        }
        localStorage.setItem('drink', id)
    })
}

export default setDrink;