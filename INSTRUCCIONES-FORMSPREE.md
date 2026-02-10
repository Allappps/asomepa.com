# Configuración GRATUITA de Correos con Formspree

## 🎯 ¿Qué es Formspree?
Es un servicio GRATUITO que procesa formularios web y envía correos automáticamente, como lo hacen WordPress y otras plataformas.

## ✅ Ventajas:
- **100% GRATIS** hasta 50 envíos/mes
- **Sin servidor** necesario
- **Adjuntos de archivos** soportados
- **Correos automáticos** a tu email
- **Dashboard** para ver envíos
- **Spam protection** integrada

## 🚀 Pasos para Configurar:

### 1. Crear Cuenta Formspree
1. Ve a: https://formspree.io
2. Regístrate con tu email (usa `asomepaa@gmail.com`)
3. Verifica tu email

### 2. Crear Nuevo Formulario
1. En el dashboard, haz clic en "New Form"
2. Dale un nombre: "Solicitud de Membresía ASOMEPA"
3. Configura el email de destino: `asomepaa@gmail.com`
4. Copia el **Form ID** (ej: `xjvldqko`)

### 3. Actualizar el Código
Reemplaza `tu-form-id` en el código con tu ID real:

```javascript
// En MembershipSection.astro
action="https://formspree.io/f/xjvldqko"
// y
const response = await fetch('https://formspree.io/f/xjvldqko', {
```

### 4. Probar el Sistema
1. Inicia tu servidor: `npm run dev`
2. Completa el formulario con datos de prueba
3. Recibirás un email en `asomepaa@gmail.com`

## 📧 Correos que Recibirás:

### Para ASOMEPA:
```
Asunto: New submission to Solicitud de Membresía ASOMEPA
De: Formspree <noreply@formspree.io>

Datos del formulario:
- Nombre Completo: [nombre]
- Especialidad Médica: [especialidad]
- Número de Cédula/ID: [cédula]
- Teléfono: [teléfono]
- Correo Electrónico: [email]
- Certificate: [nombre-del-archivo.pdf]
```

### Para el Usuario:
El sistema mostrará un mensaje de confirmación en pantalla.

## 🔧 Configuraciones Adicionales:

### Respuesta Automática al Usuario:
1. En Formspree ve a "Settings" → "Email"
2. Activa "Auto-response"
3. Configura el mensaje de confirmación

### Redirección Personalizada:
1. En "Settings" → "Redirect"
2. Añade URL de agradecimiento: `/gracias`

### Archivos Adjuntos:
- ✅ Soportados automáticamente
- ✅ Máximo 10MB por archivo
- ✅ Se adjuntan al correo

## 📊 Límites del Plan Gratis:
- **50 envíos/mes** (suficiente para ASOMEPA)
- **1 formulario** por sitio
- **Archivos** hasta 10MB
- **Sin branding** Formspree

## 🔄 Alternativas Gratuitas:

### Netlify Forms:
- 100 envíos/mes gratis
- Solo si usas Netlify hosting

### Getform:
- 100 envíos/mes gratis
- Dashboard incluido

### EmailJS:
- 200 envíos/mes gratis
- Solo frontend

## 🎉 ¡Listo para Usar!

Una vez configurado, tu formulario funcionará automáticamente:
1. Usuario completa formulario
2. Formspree procesa datos
3. Tú recibes email con toda la información
4. Usuario recibe confirmación en pantalla

**Sin costo alguno y sin mantenimiento técnico!**
