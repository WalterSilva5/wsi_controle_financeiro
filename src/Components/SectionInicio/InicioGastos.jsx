import classes from './InicioGastos.module.scss';
import InicioGastosMenu from './InicioGastosMenu';

const InicioGastos = () => (
  <div>
    <div className={`WsiShadow  wsi-border-primary mt-2 ${classes.InicioGastos} `}>
      <h4 className="mt-1 px-3 wsi-text-primary-dark"><b>GASTOS</b></h4>
      <InicioGastosMenu />
      <table className="table table-striped table-bordered wsi-border-primary">
        <thead>
          <tr className="wsi-color-primary-dark wsi-text-primary border border-success">
            <th scope="col" className="col-2">Valor</th>
            <th scope="col" className="col-2">Data</th>
            <th scope="col">Observações</th>
            <th scope="col" className="col-1">Editar</th>
          </tr>
        </thead>
        <tbody style={{ overflow: 'auto' }}>
          <tr>
            <td>
              teste
            </td>
            <td>
              teste
            </td>
            <td>
              teste
            </td>
            <td>
              <button className="btn wsi-color-primary">EDITAR</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default InicioGastos;
