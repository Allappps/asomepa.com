// Middleware para Cloudflare Pages (opcional)
export function onRequest(context) {
  // Puedes añadir lógica aquí si es necesario
  return context.next();
}
