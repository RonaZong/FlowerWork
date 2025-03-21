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

CREATE TABLE user_notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    all_new_messages BOOLEAN DEFAULT TRUE,
    direct_messages BOOLEAN DEFAULT TRUE,
    thread_replies BOOLEAN DEFAULT TRUE,
    schedule VARCHAR(255),
    notificationHours VARCHAR(255),
    start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);