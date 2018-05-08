class UI {
    // Display the drinks categories
    displayCategories(){
        const categoryList = cocktail.getCategories()
            .then(categories => {
                // Append a first option without value
                const firstOption = document.createElement('option');
                firstOption.textContent = '- Select -';
                firstOption.value = '';
                document.querySelector('#search').appendChild(firstOption);
                
                // Append into the select
                catList.forEach(category => {
                    const option = document.createElement('option');
                    option.textContent = category.strCategory;
                    option.value = category.strCategory.split(' ').join('_');
                    document.querySelector('#search').appendChild(option);
                });
            });
    }
    
    // Display cocktails without ingredients
    displayDrinks(drinks){
        // Show results
        const resultsWrapper = document.querySelector('results-wrapper');
        resultsWrapper.style.display = 'block';
        
        // Insert the results
        const resultsDiv = document.querySelector('#results');
        
        // Loop through the drinks
        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
                <div class="col-md-4">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                            +
                        </button>
                        <img class="card-img-top" src="http://${drink.strDrinkThumb}" alt="http://${drink.strDrink}">
                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                            <a data-target="#recipe" class="btn btn-success get-recipe" href="#" data-toggle="modal" data-id="${drink.idDrink}">
                                Get Recipe
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
        
        this.isFavorite();
    }
    
    // Display cocktails with ingredients
    displayDrinksWithIngredients(drinks){
        const resultsWrapper = document.querySelector('results-wrapper');
        resultsWrapper.style.display = 'block';
        
        // Insert the results
        const resultsDiv = document.querySelector('#results');
        
        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
                <div class="col-md-6">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                            +
                        </button>
                        <img class="card-img-top" src="http://${drink.strDrinkThumb}" alt="${drink.strDrink}">
                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                               <p class="card-text font-weight-bold">Instructions: </p>
                               <p class="card-text">
                                     ${drink.strInstructions}
                               </p>
                               
                        </div>
                    </div>
                </div> 
            `;    
        });
        
        this.isFavorite();
    }
}