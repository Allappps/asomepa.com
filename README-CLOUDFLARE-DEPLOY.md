# 🚀 Cloudflare Pages Deployment Guide

## ✅ **Configuración Correcta para Cloudflare Pages**

El proyecto está configurado para **Cloudflare Pages** (no Wrangler Workers).

### **🔧 Configuración en Cloudflare Pages Dashboard:**

#### **1. Build Settings:**
- **Framework preset**: `Astro`
- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **Node version**: `22`

#### **2. Variables de Entorno:**
- No se requieren variables (es un sitio estático)

#### **3. Root Directory:**
- Dejar en blanco (usar root del repo)

---

## 🚫 **Problema Solucionado:**

### **Error Anterior:**
```
✘ [ERROR] Missing entry-point to Worker script or to assets directory
```

### **Causa:**
- Cloudflare Pages estaba ejecutando `npx wrangler deploy`
- Wrangler es para Workers, no para Pages
- Pages necesita solo el build command

### **Solución:**
1. ✅ **Removido** deploy command de package.json
2. ✅ **Configurado** wrangler.toml solo por si se necesita
3. ✅ **Build process** funciona correctamente

---

## 📋 **Pasos para Deploy Exitoso:**

### **Opción 1: Cloudflare Pages Dashboard (Recomendado)**

1. **Ir a Cloudflare Pages Dashboard**
2. **"Create a project" → "Connect to Git"**
3. **Seleccionar el repositorio**
4. **Configurar build settings:**
   ```
   Framework preset: Astro
   Build command: pnpm run build
   Build output directory: dist
   ```
5. **"Save and Deploy"**

### **Opción 2: Usar Wrangler (Manual)**

```bash
# Build local
pnpm run build

# Deploy con wrangler
npx wrangler deploy --assets=./dist
```

---

## ✅ **Verificación del Build:**

### **Build Exitoso:**
```
✓ Dependencies installed (300 packages)
✓ Astro build completed (2.18s)
✓ Static pages generated (1 page)
✓ Output directory: dist/
```

### **Archivos Generados:**
- `dist/index.html` - Página principal
- `dist/_astro/` - Assets optimizados
- `dist/` - Todo el sitio estático

---

## 🎯 **Recomendación:**

**Usar Cloudflare Pages Dashboard** es la mejor opción porque:

- ✅ **Deploy automático** al hacer push
- ✅ **Preview deployments** para cada PR
- ✅ **CDN global** automático
- ✅ **Custom domain** fácil configuración
- ✅ **SSL certificates** automáticas

---

## 🔍 **Si aún tienes problemas:**

### **Checklist:**
1. ✅ Usar **Cloudflare Pages** (no Workers)
2. ✅ **Build command**: `pnpm run build`
3. ✅ **Output directory**: `dist`
4. ✅ **Framework preset**: `Astro`
5. ✅ **Node version**: `22`

### **Contact Support:**
Si el problema persiste, verificar:
- Logs completos en Cloudflare Pages
- Configuración del repositorio
- Permisos del repo

---

**🚀 El sitio está listo para deploy en Cloudflare Pages**
