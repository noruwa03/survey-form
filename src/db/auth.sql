CREATE TABLE users (
    id BIGSERIAL,
    user_id UUID UNIQUE DEFAULT gen_random_uuid(),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);