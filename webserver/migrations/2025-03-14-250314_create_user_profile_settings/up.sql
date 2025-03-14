CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    full_name VARCHAR(255),
    job_title VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    department VARCHAR(255),
    phone_number VARCHAR(20),
    profile_photo TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);