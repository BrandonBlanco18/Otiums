import React from 'react';
import Card from './Card';

function Content() {
  return (
    <div className="content_info">
      <div className="cards_conten">
        <Card title="Ventas" value="$80.654.321" />
        <Card title="Venta x Dia" value="$6.721.193" />
        <Card title="Devolucion" value="$2.344.321" />
      </div>
      <div className="card_1">
        <div className="chart">
          <div className="chart-title">Venta x Dia</div>
          <div className="chart-legend">
            <div className="legend-item">
              <span style={{ backgroundColor: '#f08080' }}></span>2023
            </div>
            <div className="legend-item">
              <span style={{ backgroundColor: '#90ee90' }}></span>2024
            </div>
            <div className="legend-item">
              <span style={{ backgroundColor: '#add8e6' }}></span>2025
            </div>
          </div>
        </div>
      </div>
      {/* Añade más componentes similares para los demás gráficos */}
    </div>
  );
}

export default Content;
