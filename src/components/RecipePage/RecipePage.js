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
                <Header />
                <main>
                    <div className="recipe-block container">
                        <div className="row">
                            <figure className="title col-xl-4">
                                <figcaption className="recipe-title">
                                    <h2>
                                        {recipe.title}
                                    </h2>
                                </figcaption>
                                <img src={Dish} className="dish-img" />
                            </figure>
                            <div className="recipe-description col-xl-6">
                                {recipe.description}

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi atque deleniti iste iusto nihil pariatur perspiciatis sed sunt tenetur? Animi dignissimos harum inventore iusto perspiciatis qui reprehenderit sapiente voluptate.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda blanditiis delectus dicta ea eos est, expedita magni, nobis omnis reiciendis sit? Adipisci autem esse exercitationem facere quaerat rerum unde.
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