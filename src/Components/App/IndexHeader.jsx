import { NavLink, withRouter } from 'react-router-dom';
import $ from 'jquery';
import classes from './IndexHeader.module.scss';

const IndexHeader = () => (
  <div>
    <nav className={`px-2 navbar navbar-expand-lg navbar-dark ${classes.Header}`}>
      <span className="navbar-brand"><b>Walter Silva</b></span>
      <a className="btn btn-sm wsi-color-primary d-md-none" type="a" data-toggle="collapse" onClick={(e) => { $('#navbarNav').toggle(); }} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>MENU</span>
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink
          className={`${classes.HeaderIndexLink}`}
          activeClassName={`wsi-text-primary h5 ${classes.HeaderLinkActive}`}
          to="/inicio"
        >
          <b>Inicio</b>
        </NavLink>
        <NavLink
          className={`${classes.HeaderIndexLink}`}
          activeClassName={`wsi-text-primary h5 ${classes.HeaderLinkActive}`}
          to="/sobre"
        >
          <b>Sobre</b>
        </NavLink>
      </div>
      <div>
        <a
          target="_blank"
          href="https://tiforadacaixa.blogspot.com.br"
          className={`btn wsi-color-primary ${classes.HeaderIndexLink}`}
          rel="noreferrer"
        >
          blog
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/walter-pereira-245067161/"
          className={`btn wsi-color-primary ${classes.HeaderIndexLink}`}
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          target="_blank"
          href="https://github.com"
          className={`btn wsi-color-primary ${classes.HeaderIndexLink}`}
          rel="noreferrer"
        >
          github
        </a>
      </div>
    </nav>

  </div>
);

export default withRouter(IndexHeader);
