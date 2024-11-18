import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="li_items">MENU</h1>
      <ul className="menu-item">
        <li className="li_items"><a href="/menu1.html">PRODUCTOS</a></li>
        <li className="li_items"><a href="/clientes.html">CLIENTES</a></li>
        <li className="li_items"><a href="#">USUARIOS</a></li>
        <li className="li_items"><a href="#">FACTURA</a></li>
        <li className="li_items"><a href="#">INFORMES</a></li>
        <li className="li_items"><a href="#">REPORTES</a></li>
        <li className="li_items"><a href="#">CONFIGURACION</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
