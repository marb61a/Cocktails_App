class CocktailDB {
    // Save recipes into local storage
    saveIntoDB(drink){
        const drinks = this.getFromDB();
        
        drinks.push(drink);
        
        // Add the new array into localstorage
        localstorage.setItem('drinks', JSON.stringify(drinks));
    }
    
    // Remove from localstorage
    removeFromDB(id){
        const drinks = this.getFromDB();
        
        drinks.forEach((drink, index) => {
            if(id === drink.id){
                drinks.splice(index, 1);
            }    
        });
        
        // Set the array into localstorage
        localStorage.setItem('drinks', JSON.stringify(drinks) );
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