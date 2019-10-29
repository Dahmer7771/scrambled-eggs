const RecipesAPI = {
    recipes: [
        {id: 1, title: "Recipe 1", description: "Recipe 1 description", image: "image"},
        {id: 2, title: "Recipe 2", description: "Recipe 2 description", image: "image"},
        {id: 3, title: "Recipe 3", description: "Recipe 3 description", image: "image"},
        {id: 4, title: "Recipe 4", description: "Recipe 4 description", image: "image"},
        {id: 5, title: "Recipe 5", description: "Recipe 5 description", image: "image"},
        {id: 6, title: "Recipe 6", description: "Recipe 6 description", image: "image"},
    ],
    all: function () {
        return this.recipes;
    },
    get: function (id) {
        const isRecipe = recipe => recipe.id === id;
        return this.recipes.find(isRecipe);
    }
};

export default RecipesAPI;