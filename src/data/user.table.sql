CREATE TABLE IF NOT EXISTS user(
    id VARCHAR(150) PRIMARY KEY NOT NULL,
    firstName VARCHAR(90) NOT NULL,
    lastName VARCHAR(120) NOT NULL,
    email VARCHAR(80) NOT NULL,
    password VARCHAR(150) NOt NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

