CREATE TABLE surveys (
    id BIGSERIAL,
    survey_id UUID UNIQUE DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    expiry_date TIMESTAMP NOT NULL,
    active BOOLEAN NOT NULL,
    questions JSON[],
    user_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);