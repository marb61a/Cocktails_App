class CocktailDB {
    // Save recipes into local storage
    saveIntoDB(drink){
        const drinks = this.getFromDB();
        
        drinks.push(drink);
        
        // Add the new array into localstorage
        localstorage.setItem('drinks', JSON.stringify(drinks));
    }
    
    // Return recipes from localstorage
    getFromDB(){
        let drinks;
        
        // Check from localstorage
        if(localStorage.getItem('drinks') === null){
            drinks = [];
        } else {
            drinks = JSON.parse( localStorage.getItem('drinks') );
        }
        
        return drinks;
    }
}