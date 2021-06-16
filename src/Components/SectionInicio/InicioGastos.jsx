import { useSelector } from 'react-redux';
import classes from './InicioGastos.module.scss';
import InicioGastosMenu from './InicioGastosMenu';
import InicioGastosGrafico from './InicioGastosGrafico';

const InicioGastos = () => {
  const entradasState = useSelector((state) => state.entradasState);
  const entradas = entradasState.entradas.map(
    (entrada) => (
      <tr>
        <td>{entrada.valor}</td>
        <td>{entrada.data}</td>
        <td>{entrada.obs}</td>
        <td><button className="btn wsi-color-primary">EDITAR</button></td>
      </tr>
    ),
  );
  return (
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
            {entradas}
          </tbody>
        </table>
      </div>
      <div className={`WsiShadow  wsi-border-primary mt-2 d-flex col-12 ${classes.InicioGastos} `}>
        <InicioGastosGrafico />
      </div>
    </div>
  );
};

export default InicioGastos;
