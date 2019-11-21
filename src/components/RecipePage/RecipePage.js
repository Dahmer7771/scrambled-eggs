import React from 'react';
import RecipesAPI from "../../helpers/recipes";
import './RecipePage.css';
import Header from "../Header/Header";
import Dish from "../../img/dish.png";
import Footer from "../Footer/Footer";
import CustomHR from "../CustomHR/CustomHR";

class RecipePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
        const recipe = RecipesAPI.get(
            parseInt(this.props.match.params.id, 10)
        );

        if(!recipe) {
            return <div>Sorry, but the recipe was not found</div>
        }

        const {
            like,
        } = this.state;

        return (
            <React.Fragment>
                <Header />
                <main>
                    <div className="recipe-block-any container">
                        <div className="row">
                            <figure className="title col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
                                <img src={Dish} className="dish-img" />
                            </figure>
                            <div className="recipe-description-any col-xl-8 col-lg-7 col-lg-7 col-md-12 col-sm-12 col-12">
                                <div className="recipe-title">
                                    <h2>
                                        {recipe.title} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate dolor nulla odit officiis perspiciatis qui repellat repellendus,
                                    </h2>
                                </div>
                                <h6>
                                    {recipe.description}

                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi atque deleniti iste iusto nihil pariatur perspiciatis sed sunt tenetur? Animi dignissimos harum inventore iusto perspiciatis qui reprehenderit sapiente voluptate.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda blanditiis delectus dicta ea eos est, expedita magni, nobis omnis reiciendis sit? Adipisci autem esse exercitationem facere quaerat rerum unde.

                                </h6>
                                <i className={`like_recipe ${like}`} onClick={this.showLike}></i>
                            </div>
                        </div>
                    </div>
                </main>
                <CustomHR/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default RecipePage;