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
        
    }
}

// Document ready function
function documentReady(){
    
}