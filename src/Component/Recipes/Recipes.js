import React, { Component } from 'react';
import Recipe from './Recipe/Recipe'
import Food from './../Food/Food';
import './Recipes.css';
import { NavLink } from 'react-router-dom';
import './Recipe/Recipe.css'


class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: Food,

        }
    }
    render() {
        let recipes = this.state.food.map((e, index) => {
            return <Recipe key={index} name={e.name} src={e.src} id={e.id} video={e.video}></Recipe>
        })
        return (
            <div>
                <header className="header" >

                    <div className="header__text-box">
                        <h1 className="heading-primary">
                         Recipes:
                        </h1>
                        <NavLink to="/" className="btn btn--white btn--animated">Go back to home page</NavLink>

                    </div>
                </header>
                


                <section className="section-features" id='home'>
                    {recipes}
                </section>
            </div>
        );
    }
}

export default Recipes;