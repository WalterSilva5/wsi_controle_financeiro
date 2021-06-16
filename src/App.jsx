import { Route, Switch, Redirect } from 'react-router-dom';
import IndexHeader from './Components/App/IndexHeader';
import Inicio from './Components/SectionInicio';
import Sobre from './Components/SectionSobre';

import classes from './Components/App/App.module.scss';

const App = () => (
  <div>
    <IndexHeader />
    <div className={`d-flex justify-content-center ${classes.AppBody}`}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/inicio" />
        </Route>
        <Route path="/inicio">
          <Inicio />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="*">
          <h1>ERROR 404: PAGE NOT FOUND!</h1>
        </Route>
      </Switch>
    </div>
    <nav className="navbar navbar-dark text-center d-flex justify-content-center" style={{ backgroundColor: 'black' }}>
      <h3 className="wsi-text-primary">
        <b>
          Walter Silva
          &#123;
          {' '}
          {new Date().getFullYear()}
          {' '}
          &#125;
        </b>
      </h3>
    </nav>
  </div>
);

export default App;
