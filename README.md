# PedidosYa Local v0

Primera pantalla educativa de un tablero de pedidos para un pequeño negocio de Cali.

## Estado real

- Implementado: listado con tres pedidos ficticios, filtro por estado y diseño adaptable al celular.
- No implementado todavía: login, creación/edición/eliminación, base de datos y persistencia.
- Esta es la entrega inicial de la fase 1, no el producto mínimo completo de la fase 2.
- Base preparada con asistencia de IA. Antes de presentarla como habilidad propia, Juan Camilo debe ejecutarla, explicarla y modificarla con comprensión.
- El nombre es provisional y el proyecto no está afiliado a la plataforma comercial PedidosYa.

## Ejecutar

Requiere Node.js 20.9 o superior y pnpm. Instalar una vez con `pnpm install`; ejecutar con `pnpm dev` y abrir http://localhost:3000.

Verificar con `pnpm typecheck` y `pnpm build`.

## Entender el primer avance

1. `app/pedidos.ts` define el tipo Pedido y los datos ficticios.
2. `app/page.tsx` filtra y presenta esos datos. El filtro vive en memoria: al recargar se vuelve a Todos.
3. `app/globals.css` adapta la pantalla a celular y computador.

Primera práctica (20–30 min): añadir un cuarto pedido ficticio, predecir en qué filtro aparecerá y comprobarlo. Explicar la diferencia entre modificar este archivo y guardar un pedido en una base de datos. Hacer un commit propio solo después de entender el cambio.

## Siguiente fase, sin abrir otros frentes

Supabase para acceso con cuenta y persistencia; crear, editar, eliminar y cambiar estado; validar entradas; comprobar que cada cuenta solo accede a sus propios pedidos. No añadir pagos, inventario, reparto, WhatsApp ni RAG.

Antes de publicar: comprobar que solo se incluyen estos archivos, datos ficticios y ningún secreto. No incluir el CV ni documentos financieros que están fuera de esta carpeta.

Para una demo personal puede evaluarse Vercel Hobby. Antes de un uso comercial, cotizar un plan permitido y los costos de alojamiento. No prometer alojamiento gratuito perpetuo.
