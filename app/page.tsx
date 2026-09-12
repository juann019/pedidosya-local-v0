"use client";

import { useState } from "react";
import { pedidos, type Estado } from "./pedidos";

const filtros = ["Todos", "Pendiente", "En preparación", "Entregado"] as const;
const moneda = new Intl.NumberFormat("es-CO", {
  style: "currency", currency: "COP", maximumFractionDigits: 0,
});
const clases: Record<Estado, string> = {
  "Pendiente": "pendiente", "En preparación": "preparacion", "Entregado": "entregado",
};

export default function Home() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
  const visibles = pedidos.filter(pedido => filtro === "Todos" || pedido.estado === filtro);

  return (
    <main>
      <header className="cabecera">
        <p className="etiqueta">PRIMER AVANCE · SEPTIEMBRE 2026</p>
        <h1>PedidosYa Local <span>v0</span></h1>
        <p>Los pedidos de un pequeño negocio, en un solo lugar.</p>
      </header>

      <aside className="aviso" aria-label="Alcance del prototipo">
        <strong>Demostración con datos ficticios.</strong> Esta primera pantalla permite consultar
        y filtrar pedidos. El registro de pedidos, el acceso con cuenta y el guardado vendrán después.
      </aside>

      <section aria-labelledby="titulo-pedidos">
        <div className="encabezado-lista"><h2 id="titulo-pedidos">Pedidos</h2>
          <p aria-live="polite">{visibles.length} de {pedidos.length} pedidos</p>
        </div>
        <div className="filtros" role="group" aria-label="Filtrar por estado">
          {filtros.map(opcion => (
            <button key={opcion} type="button" aria-pressed={filtro === opcion}
              onClick={() => setFiltro(opcion)}>{opcion}</button>
          ))}
        </div>

        {visibles.length === 0 ? <p className="vacio">No hay pedidos en este estado.</p> : (
          <ul className="pedidos">
            {visibles.map(pedido => (
              <li key={pedido.id} className="pedido">
                <div className="fila"><span className="numero">Pedido #{pedido.id}</span>
                  <span className={`estado ${clases[pedido.estado]}`}>{pedido.estado}</span>
                </div>
                <h3>{pedido.cliente}</h3>
                <p>{pedido.detalle}</p>
                <p className="total">{moneda.format(pedido.total)} <span>COP</span></p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer>Proyecto educativo independiente. No está afiliado a la plataforma comercial PedidosYa.</footer>
    </main>
  );
}
