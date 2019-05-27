//LIBRARIES
import React from "react";
import {
  Row, Col
} from 'antd';
import { useGlobal } from 'reactn';

/**
 * Recipe details component, responsible for showing all the info for each recipe
 */
function RecipeDetails() {
  return (
    <Row>
      <Col lg={{ span: 8, offset: 8 }}>
        <div id="RecipeDetails">
          <h1 className="detailsTitle">Required ingredients</h1>
        </div>
      </Col>
    </Row>
  );
}

export default RecipeDetails;
