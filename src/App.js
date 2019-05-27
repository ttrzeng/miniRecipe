//LIBRARIES
import React, { PureComponent } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import {
  Row, Col
} from 'antd';

//ASSETS
import logo from './assets/logo.png';

//COMPONENTS
import ListOfRecipes from './components/listOfRecipes/listOfRecipes.component';
import RecipeDetails from './components/recipeDetails/recipeDetails.component';

//STYLES
import 'antd/dist/antd.css';

/**
 * Main app component, responsible for handling overall application behaviour and layout
 */
function App() {
  return (
    <div className="miniRecipes">
      <Row className="header">
        <Col xs={{ span: 8, offset: 4 }} lg={{ span: 4, offset: 10 }}>
          <img className="logo" src={logo} width="250" height="70" alt="logo"/>
        </Col>
      </Row>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={ ListOfRecipes } />
            <Route path="/recipe" exact component={ RecipeDetails } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
