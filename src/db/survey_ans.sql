CREATE TABLE survey_answers (
    id BIGSERIAL,
    survey_answer_id UUID UNIQUE DEFAULT gen_random_uuid(),
    survey_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    expiry_date TIMESTAMP NOT NULL,
    active BOOLEAN NOT NULL,
    questions JSON[],
    user_id UUID NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(survey_id) REFERENCES surveys(survey_id) ON DELETE CASCADE
);
