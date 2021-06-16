import Chart from 'react-google-charts';
import $ from 'jquery';

const InicioGastosGrafico = () => (
  <div className="d-flex justify-content-center col-12">
    <Chart
      width={900}
      chartType="AreaChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Mês', 'Ganho', 'Gasto'],
        ['JANEIRO', 1000, 130],
        ['FEVEREIRO', 600, 520],
        ['MARÇO', 800, 200],
        ['ABRIL', 300, 600],
        ['MAIO', 600, 230],
        ['MAIO', 600, 230],
      ]}
      options={{
        title: 'GANHOS E GASTOS POR MÊS',
        chartArea: { width: '100%' },
        width: '100%',
        height: '300px',
        colors: ['#00ff15', '#ff0000'],
        legend: {
          text: 'teste', textStyle: { fontSize: 20 }, labeledValueText: 'both', position: 'top',
        },
        hAxis: {
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}
      legendToggle
    />
  </div>
);

export default InicioGastosGrafico;
