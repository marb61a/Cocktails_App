// Instantiate classes
const ui = new UI(),
      cocktail = new CocktailAPI(),
      cocktailDB = new CocktailDB();

// Create the Event Listeners
function eventListeners(){
    // Document Ready
    document.addEventListener('DOMContentLoaded', documentReady);
     
    // Add event listener when the form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm){
        searchForm.addEventListener('submit', getCocktails);
    }
    
    // Listeners from the results div
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv){
        resultsDiv.addEventListener('click', resultsDelegation);
    }
}

eventListeners();

// Get cocktails function
function getCocktails(e){
    e.preventDefault();
    
    const searchTerm = document.querySelector('#search').value;
    
    // Check there is a value on the search input
    if(searchTerm === ''){
        // Call User Interface print message
         ui.printMessage('Please add something into the form', 'danger');
    } else {
        // Server response from the promise
        let serverResponse;
        
        // The type of search such as name, ingredient or cocktails
        const type = document.querySelector('#type').value;
        
        // Check to see which method and then run
        switch(type){
            case 'name':
                serverResponse = cocktail.getDrinksByName( searchTerm );
                break;
           case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient( searchTerm );
                break;
           case 'category':
                serverResponse = cocktail.getDrinksByCategory( searchTerm );
                break;
           case 'alcohol': 
                serverResponse = cocktail.getDrinksByAlcohol(searchTerm);
                break;
        }
        
        ui.clearResults();
        
        // Query by the name of the cocktail
        serverResponse.then(cocktails => {
            if(cocktails.cocktails.drinks === null){
                // There is nothing existing here
                ui.printMessage('There\'re no results, try a different term ', 'danger');
            } else {
                if(type === 'name'){
                    // Display with ingreients
                    ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
                } else {
                    // Display without Ingredients (category, alcohol, ingredient)
                    ui.displayDrinks(cocktails.cocktails.drinks);
                }
            }    
        });
    }
}

// Document ready function
function documentReady(){
    
}