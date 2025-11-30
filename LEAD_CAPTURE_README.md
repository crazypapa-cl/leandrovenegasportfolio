# Lead Capture Landing Page - Guía de Uso

## 🎯 ¿Qué se ha creado?

Una landing page profesional en `/leandro` para capturar leads a cambio de un PDF descargable.

## 📋 Pasos para Activar

### 1. Actualizar la Base de Datos

Ejecuta el script SQL actualizado para crear la tabla de leads:

```bash
psql "tu_database_url" -f src/db/schema.sql
```

O ejecuta manualmente en tu cliente de PostgreSQL:

```sql
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
```

### 2. Agregar tu PDF

Coloca tu PDF en la carpeta `public/ebooks/` con el nombre `guia-google-maps.pdf`

**Importante:** El archivo debe llamarse exactamente así, o actualiza la ruta en:
- `src/app/api/leads/submit/route.ts` (línea 32)

### 3. Probar la Landing Page

1. Visita: `http://localhost:3000/leandro`
2. Completa el formulario
3. Verifica que:
   - Los datos se guarden en la base de datos
   - El PDF se descargue automáticamente

### 4. Ver los Leads Capturados

Para ver los leads en tu base de datos:

```sql
SELECT * FROM leads ORDER BY created_at DESC;
```

## 🎨 Personalización

### Cambiar el Contenido

Edita `src/app/leandro/page.tsx` para:
- Modificar títulos y descripciones
- Cambiar los beneficios listados
- Ajustar los números de social proof
- Personalizar colores y estilos

### Cambiar el Nombre del PDF

Si tu PDF tiene otro nombre, actualiza en `src/app/api/leads/submit/route.ts`:

```typescript
downloadUrl: '/ebooks/TU-NOMBRE-DE-ARCHIVO.pdf'
```

## 📊 Exportar Leads

Para exportar tus leads a CSV:

```sql
COPY (SELECT nombre, email, telefono, created_at FROM leads ORDER BY created_at DESC) 
TO '/ruta/leads.csv' 
WITH CSV HEADER;
```

## 🚀 Integración con Email Marketing

Puedes integrar con servicios como:

### Opción 1: Webhook (Recomendado)
Modifica `src/app/api/leads/submit/route.ts` para enviar los datos a tu servicio de email:

```typescript
// Después de guardar en la DB
await fetch('https://tu-servicio-email.com/api/webhook', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre, email, telefono })
});
```

### Opción 2: Exportación Manual
Exporta periódicamente los leads nuevos y súbelos a tu plataforma de email marketing.

## 🔒 Seguridad

- ✅ Validación de email en el frontend y backend
- ✅ Protección contra inyección SQL (usando queries parametrizadas)
- ✅ Rate limiting (considera agregar si tienes mucho tráfico)

## 📱 Responsive

La landing page es completamente responsive y se ve bien en:
- 📱 Móviles
- 📱 Tablets
- 💻 Desktop

## 🎯 Conversión

La página incluye elementos optimizados para conversión:
- Hero section con propuesta de valor clara
- Beneficios específicos y tangibles
- Social proof (números de descargas, valoración)
- Múltiples CTAs (Call To Action)
- Formulario simple (solo campos esenciales)
- Confirmación visual después del envío

## 🔗 URLs

- **Landing Page:** `/leandro`
- **API Endpoint:** `/api/leads/submit` (POST)
- **PDF:** `/ebooks/guia-google-maps.pdf`

## ⚠️ Importante

**Antes de lanzar en producción:**
1. ✅ Agrega tu PDF real en `public/ebooks/`
2. ✅ Actualiza la base de datos con la nueva tabla
3. ✅ Personaliza el contenido de la landing page
4. ✅ Prueba el flujo completo
5. ✅ Configura las variables de entorno en Vercel
