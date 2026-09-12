export type Estado = "Pendiente" | "En preparación" | "Entregado";

export type Pedido = {
  id: string;
  cliente: string;
  detalle: string;
  total: number;
  estado: Estado;
};

// Datos ficticios: este archivo no contiene información de clientes reales.
export const pedidos: Pedido[] = [
  { id: "001", cliente: "Cliente de ejemplo A", detalle: "2 almuerzos del día", total: 28000, estado: "Pendiente" },
  { id: "002", cliente: "Cliente de ejemplo B", detalle: "1 almuerzo y 1 jugo", total: 18000, estado: "En preparación" },
  { id: "003", cliente: "Cliente de ejemplo C", detalle: "3 almuerzos del día", total: 42000, estado: "Entregado" },
];
