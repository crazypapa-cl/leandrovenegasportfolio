-- Schema for cafe_ranking table

CREATE TABLE IF NOT EXISTS cafe_ranking (
    id VARCHAR(255) PRIMARY KEY, -- place_id from Google API
    ranking INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    puntuacion NUMERIC(2, 1) NOT NULL,
    total_resenas INT NOT NULL,
    direccion VARCHAR(255)
);

-- Index for faster queries if needed (though table is small)
CREATE INDEX IF NOT EXISTS idx_cafe_ranking_ranking ON cafe_ranking(ranking);

-- Schema for leads table
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
