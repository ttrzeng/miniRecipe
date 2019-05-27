//LIBRARIES
import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import {
  Button
} from 'antd';

/**
 * Get recipe component, responsible for updating recipes
 * @class GetRecipeButton
 * @extends PureComponent
 */
class GetRecipeButton extends PureComponent<Props> {

    /**
     * Constructor for listOfSongs
     * @constructor
     */
    constructor(props : Object) {
      super(props);

      this.state = {
      };

      this.getRecipe = this.getRecipe.bind(this);
    }

    getRecipe() {
      this.props.history.push('/recipe');
    }

    render() {
        return (
          <div className="showIngredients">
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={() => this.getRecipe()}>Show ingredients</Button>
          </div>
        );
    }
}

export default withRouter(GetRecipeButton);
