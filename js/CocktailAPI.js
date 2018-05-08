class CocktailAPI {
    // Get recipe by name
    async getDrinksByName(name){
        // Search by name 
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        
        // This returns a JSON response
        const cocktails = await apiResponse.json();
        
        return {
            cocktails    
        };
    }
    
    // Get recipes by ingredient
    async getDrinksByIngredient(ingredient){
        // Search by ingredient
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        
        // Await response the return JSON
        const cocktails = await apiResponse.json();
        
        return {
            cocktails    
        };
    }
}