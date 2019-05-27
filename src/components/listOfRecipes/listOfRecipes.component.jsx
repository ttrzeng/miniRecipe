//LIBRARIES
import React, { useState, useEffect } from "react";
import {
  Row, Col, Icon
} from 'antd';

//COMPONENTS
import GetRecipeButton from '../getRecipeButton/getRecipeButton.component';

//DATA
import recipes from '../../recipes';

/**
 * list of recipes component, responsible showing all recipes
 */
function ListOfRecipes() {

      const [showIngredientsBtn, setShowIngredientsBtn] = useState(false);
      const [selectedRecipeList, setSelectedRecipeList] = useState('');

      useEffect(() => {
        setShowIngredientsBtn(selectedRecipeList.length !== 0);
      }, [selectedRecipeList.length]);

      const getRecipeIngredients = (recipe) => {
        if(!selectedRecipeList.includes(recipe.name)) {
          setSelectedRecipeList([...selectedRecipeList, recipe.name]);
        } else {
          setSelectedRecipeList(selectedRecipeList.filter(item => item !== recipe.name));
        }
      }

      return (
        <Row id="ListOfRecipes">
          <Col lg={{ span: 8, offset: 8 }}>
            <div>
              {
                recipes.map((recipe, index) => {
                  return (
                    <div className="recipeItem"
                         key={index}
                         style={{background: selectedRecipeList.includes(recipe.name) ? "#76baf2" : ""}}
                         onClick={() => getRecipeIngredients(recipe)}>
                      <Row>
                        <Col span={6}>
                          <img className="recipeImage" src={`/images/${recipe.name.split(' ').join('')}.jpg`} width="100" height="100" alt="recipe"/>
                        </Col>
                        <Col span={18}>
                          <Row className="recipeDetails">
                            <Col><b>{ recipe.name }</b></Col>
                            <Col>Cuisine: { recipe.type }</Col>
                            <Col><Icon type="clock-circle"/> {recipe.cook_time} minutes</Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </div>
          </Col>
          {
            showIngredientsBtn &&
            <GetRecipeButton/>
          }
        </Row>
    );
}

export default ListOfRecipes;
