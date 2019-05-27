//LIBRARIES
import React, { useState, useEffect } from "react";
import {
  Row, Col, Icon
} from 'antd';
import { useGlobal } from 'reactn';

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
      const [listOfIngredients, setListOfIngredients] = useState([]);
      const [, setIngredients] = useGlobal('ingredients');

      useEffect(() => {
        setShowIngredientsBtn(selectedRecipeList.length !== 0);
        setIngredients(listOfIngredients);
      }, [selectedRecipeList.length, listOfIngredients, setIngredients]);

      const getRecipeIngredients = (recipe) => {
        let newSetOfIngredients = new Set([...listOfIngredients, ...recipe.ingredients]);
        if(!selectedRecipeList.includes(recipe.name)) {
          setSelectedRecipeList([...selectedRecipeList, recipe.name]);
        } else {
          setSelectedRecipeList(selectedRecipeList.filter(item => item !== recipe.name));
        }
        setListOfIngredients([...newSetOfIngredients]);
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

                         onClick={() => getRecipeIngredients(recipe)}>
                      <Row>
                        <Col span={6}>
                          <img className="recipeImage" src={`/images/${recipe.name.split(' ').join('')}.jpg`} width="100" height="100" alt="recipe"/>
                        </Col>
                        <Col span={12}>
                          <Row className="recipeDetails">
                            <Col><b>{ recipe.name }</b></Col>
                            <Col>Cuisine: { recipe.type }</Col>
                            <Col><Icon type="clock-circle"/> {recipe.cook_time} minutes</Col>
                          </Row>
                        </Col>
                        <Col span={6}>
                          {
                            selectedRecipeList.includes(recipe.name) &&
                            <Icon className="checkIcon" type="check-circle"/>
                          }
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
