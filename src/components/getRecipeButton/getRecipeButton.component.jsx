//LIBRARIES
import React from "react";
import {
  Button
} from 'antd';
import useReactRouter from 'use-react-router';

/**
 * Get recipe component, responsible for updating recipes
 */
function GetRecipeButton() {

    const { history } = useReactRouter();

    const getRecipe = () => {
      history.push('/recipe');
    }

    return (
      <div className="showIngredients">
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={() => getRecipe()}>Show ingredients</Button>
      </div>
    );

}

export default GetRecipeButton;
