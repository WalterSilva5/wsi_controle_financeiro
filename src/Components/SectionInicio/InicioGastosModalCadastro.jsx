/* eslint-disable use-isnan */
/* eslint-disable jsx-a11y/label-has-associated-control */
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';
import { entradasActions } from '../../Store/Store';

const InicioGastosModalCadastro = () => {
  const [valor, setvalor] = React.useState(0);
  const [data, setdata] = React.useState(new Date());
  const [obs, setobs] = React.useState('');

  const dispatch = useDispatch();
  const entradasState = useSelector((state) => state.entradasState);

  const adicionarGasto = () => {
    dispatch(
      entradasActions.updateEntradas(
        {
          valor,
          data,
          obs,
          tipo: 'e',
        },
      ),
    );
  };

  React.useEffect(() => {
    try {
      setvalor(parseFloat(valor));
      if (valor === NaN || valor === '') {
        setvalor(0);
      }
    } catch {
      setvalor(0);
    }
  }, [valor]);
  return (
    <div style={{ display: 'none' }} id="InicioGastosModalCadastro" className="modal rounded">
      <div tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog rounded wsi-border-primary WsiShadow" role="document">
          <div className="modal-content">
            <div className="modal-header bg-dark text-light">
              <h5 className="modal-title" id="exampleModalLabel"><b>ADICIONAR GASTO</b></h5>
              <button type="button" className="close wsi-color-primary rounded" onClick={() => { $('#InicioGastosModalCadastro').hide(); }} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="valor">Valor</label>
                <input type="text" className="form-control col-4" value={valor} onChange={(e) => { setvalor(e.target.value); }} />
              </div>
              <div className="form-group my-2">
                <label htmlFor="data">Data</label>
                <input type="date" className="form-control" value={data} onChange={(e) => { setdata(e.target.value); }} />
              </div>

              <div className="form-group">
                <label htmlFor="obs">obs</label>
                <textarea rows="3" className="form-control" value={obs} onChange={(e) => { setobs(e.target.value); }} />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn WsiShadow wsi-text-primary bg-secondary"
                onClick={() => { $('#InicioGastosModalCadastro').hide(); }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn wsi-color-primary"
                onClick={adicionarGasto}
              >
                SALVAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioGastosModalCadastro;
