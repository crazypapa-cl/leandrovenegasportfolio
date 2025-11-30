# Sistema de Ranking de Cafeterías

Este sistema actualiza automáticamente el ranking de cafeterías en Valparaíso usando Google Places API.

## 🚀 Configuración Inicial

### 1. Variables de Entorno

Crea un archivo `.env.local` con:

```env
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/nombre_db
GOOGLE_PLACES_API_KEY=tu_api_key_aqui
CRON_SECRET=un_secreto_aleatorio_seguro
NODE_ENV=development
```

### 2. Base de Datos

Ejecuta el script SQL para crear la tabla:

```bash
psql "tu_database_url" -f src/db/schema.sql
```

O copia el contenido de `src/db/schema.sql` en tu cliente de PostgreSQL.

### 3. Primera Ejecución

Ejecuta manualmente el script para poblar la base de datos:

```bash
npx ts-node scripts/run-ranking-job.ts
```

## 📡 Endpoints

### GET `/api/cafeterias/ranking`
Devuelve el ranking actual de cafeterías.

**Respuesta:**
```json
[
  {
    "id": "ChIJ...",
    "ranking": 1,
    "nombre": "Café Ejemplo",
    "puntuacion": "4.8",
    "total_resenas": 250,
    "direccion": "Calle Ejemplo 123, Valparaíso"
  }
]
```

### GET `/api/job/update-ranking`
Actualiza el ranking (protegido con `CRON_SECRET`).

**Headers requeridos:**
```
Authorization: Bearer tu_cron_secret
```

## 🔄 Actualización Automática

### En Vercel
El archivo `vercel.json` configura un Cron Job que se ejecuta diariamente a las 6:00 AM UTC.

### En servidor propio
Configura un cron job en tu servidor:

```bash
# Ejecutar diariamente a las 6:00 AM
0 6 * * * cd /ruta/proyecto && npx ts-node scripts/run-ranking-job.ts
```

## 📊 Uso en el Frontend

Importa el componente `CafeRanking`:

```tsx
import { CafeRanking } from '@/components/CafeRanking';

export default function MiPagina() {
  return (
    <div>
      <h1>Mejores Cafeterías</h1>
      <CafeRanking />
    </div>
  );
}
```

## 🔧 Migración a Servidor Propio

Si quieres migrar fuera de Vercel:

1. Despliega el código en tu servidor Node.js
2. Configura las variables de entorno
3. Configura un cron job del sistema para ejecutar `scripts/run-ranking-job.ts`
4. La lógica en `src/lib/ranking-service.ts` funciona independientemente de Next.js

## 💰 Costos de API

El sistema usa:
- **Text Search**: ~1 llamada por actualización
- **Place Details**: ~20 llamadas por actualización (una por cafetería)

Costo aproximado por actualización: $0.05 - $0.10 USD

Google ofrece $200 de crédito mensual gratuito.

## 🐛 Troubleshooting

### Error: "Cannot connect to database"
- Verifica que `DATABASE_URL` esté correctamente configurada
- Asegúrate de que la base de datos esté accesible

### Error: "GOOGLE_PLACES_API_KEY is not defined"
- Verifica que la variable de entorno esté configurada
- En Vercel, asegúrate de haberla agregado en Settings → Environment Variables

### No aparecen resultados
- Ejecuta manualmente el script: `npx ts-node scripts/run-ranking-job.ts`
- Revisa los logs en la consola
- Verifica que la tabla tenga datos: `SELECT * FROM cafe_ranking;`
