/* eslint-disable react/button-has-type */
import $ from 'jquery';
import classes from './InicioGastosMenu.module.scss';
import InicioGastosModalCadastro from "./InicioGastosModalCadastro"

const InicioGastosMenu = () => (
  <div className={` d-flex align-middle p-2 ${classes.InicioGastosMenu}`}>
    <button className="btn wsi-color-primary btn-lg mr-2" onClick={() => { $('#InicioGastosModalCadastro').toggle(); }}>ADICIONAR</button>
    <select className="form-select btn wsi-color-primary mx-2" style={{ width: '160px' }}>
      <option className="btn wsi-color-primary btn-lg mx-2 h4">VER LISTA</option>
      <option className="btn wsi-color-primary btn-lg mx-2 h4">VER GRAFICO</option>
    </select>
    <InicioGastosModalCadastro />
  </div>
);

export default InicioGastosMenu;
