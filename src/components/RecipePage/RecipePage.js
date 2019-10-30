import React from 'react';
import RecipesAPI from "../../helpers/recipes";
import './RecipePage.css';

class RecipePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const recipe = RecipesAPI.get(
            parseInt(this.props.match.params.id, 10)
        );

        if(!recipe) {
            return <div>Sorry, but the recipe was not found</div>
        }

        return (
            <React.Fragment>
                <header>{recipe.id}</header>
                <main>
                    <figure>
                        <img src={recipe.image} />
                        <figcaption className="recipe-title">
                            {recipe.title}
                        </figcaption>
                    </figure>
                    <div className="recipe-description">
                        {recipe.description}
                    </div>
                </main>
                <footer></footer>
            </React.Fragment>
        );
    }
}

export default RecipePage;