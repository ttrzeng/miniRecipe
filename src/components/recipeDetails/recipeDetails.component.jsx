//LIBRARIES
import React from "react";
import { withRouter } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import {
  Row, Col, Button
} from 'antd';
import { useGlobal } from 'reactn';

/**
 * Recipe details component, responsible for showing all the info for each recipe
 */
function RecipeDetails() {

  const [ingredients] = useGlobal('ingredients');
  const { history } = useReactRouter();

  const goBack = () => {
    history.push('/');
  }

  return (
    <Row>
      <Col lg={{ span: 8, offset: 8 }}>
        <div id="RecipeDetails">
          <h1 className="detailsTitle">Required ingredients</h1>
          <ul>
            {
              ingredients.length > 0 ?
              ingredients.sort().map((ingredient, index) => {
                return(
                  <li key={index}>{ingredient}</li>
                )
              })
              :
              <h4>No recipe is selected</h4>
            }
          </ul>
          <Button
            shape="round"
            size="small"
            icon="left-circle"
            onClick={() => goBack()}>Back</Button>
        </div>
      </Col>
    </Row>
  );
}

export default withRouter(RecipeDetails);
