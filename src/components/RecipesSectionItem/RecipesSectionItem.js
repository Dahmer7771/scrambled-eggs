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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <section className="recipes-section-item">
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
                            Классический крабовый салат с огурцом
                        </Link>
                        <div className="recipe-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque facere saepe sed. Consectetur cumque eos, eum exercitationem magni nihil, non nulla quas quasi quia quibusdam quo quos sint veritatis.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consequuntur dolore eius et expedita in, magni minus nesciunt, officia praesentium quasi quisquam quo rem similique, sint ut velit voluptatem!
                        </div>
                    </figcaption>
                    <div className={`like ${like}`}  onClick={this.showLike}>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default RecipesSectionItem;