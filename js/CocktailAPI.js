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
    
    // Retrieves all categories from the API
    async getCategories(){
        const apiResponse = await fetch('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        
         // Await response the return JSON
        const cocktails = await apiResponse.json();
        
        return {
            cocktails    
        };
    }
    
    // Get Drinks By Category
     async getDrinksByCategory( category ) {
          // Search by Category
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
          // Wait for response then return JSON
          const cocktails = await apiResponse.json();

          return {
               cocktails
          };
     }

     // Get alcohol or non alcohol drinks
     async getDrinksByAlcohol( term ) {
          // Search by Category
          const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
          
          // Wait for response then return JSON
          const cocktails = await apiResponse.json();

          return {
               cocktails
          };
     }
}