import React, { Component } from 'react';
import './RecipesSection.css';
import RecipesAPI from '../../helpers/recipes'
import RecipesSectionItem from '../RecipesSectionItem/RecipesSectionItem';
import RecipePage from "../RecipePage/RecipePage";

class RecipesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <section className="recipes-section container">
                <h3>Рецепты</h3>
                <div className="category">
                        <div className="recommended">Рекомендуем</div>
                        <div className="new-recipes">Новые рецепты</div>
                        <div className="popular">Популярные</div>
                </div>
                <div className="row justify-content-around no-gutters">
                    {RecipesAPI.all().map(recipe => {
                        return (
                            <RecipesSectionItem
                                id={recipe.id}
                                title={recipe.title}
                                description={recipe.description}
                                image={recipe.image}
                                link={`recipes/${recipe.id}`}
                            />
                        )
                    })}
                </div>
            </section>
        );
    }
}
 
export default RecipesSection;