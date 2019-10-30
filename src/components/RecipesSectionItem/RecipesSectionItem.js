import React, { Component } from 'react';
import './RecipesSectionItem.css';
import Dish from '../../img/dish.png'
import Like from '../../img/like.png'
import {
    Link
} from "react-router-dom";
import RecipePage from "../RecipePage/RecipePage";

class RecipesSectionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeId: this.props.id,
            recipeTitle: this.props.title,
            recipeDescription: this.props.description,
            recipeImage: this.props.image,
                link: this.props.link,
            like: "zmdi zmdi-favorite-outline",
        };
    }

    showLike = () => {
        const {
            like,
        } = this.state;

        if (like === "zmdi zmdi-favorite-outline") {
            this.setState( {
                like: "zmdi zmdi-favorite",
            })
        } else {
            this.setState({
                like: "zmdi zmdi-favorite-outline"
            })
        }
    }

    render() {
        const {
            like,
        } = this.state;


        return (
            <section className="recipes-section-item col-xl-5">
                <img
                    className="recipe-image"
                    src={Dish}
                    alt="qwe"
                />
                <figcaption >
                    <Link
                        to={this.state.link}
                        className="recipe-title"
                    >
                        Классический крабовый салат с огурцом и мидиями
                    </Link>
                    <div className="recipe-description">
                        Здесь описывается рецепт...Здесь описывается рецепт...Здесь описывается рецепт...
                    </div>
                </figcaption>
                <div className={`like ${like}`}  onClick={this.showLike}>
                </div>
            </section>
        );
    }
}
 
export default RecipesSectionItem;