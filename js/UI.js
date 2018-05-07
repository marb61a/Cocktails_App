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
    
}