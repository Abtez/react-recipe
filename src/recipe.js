import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, type, image, ingredients}) => {
    return (
        <div className={style.recipes}>
            <h1>{title}</h1>
            <h4 className='text-underline'><strong><small>Meal Type : {type}</small></strong></h4>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe;

