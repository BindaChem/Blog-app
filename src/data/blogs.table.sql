CREATE TABLE IF NOT EXISTS blogs(
    id VARCHAR(150) PRIMARY KEY NOT NULL,
    title VARCHAR(90) NOT NULL,
    img_url TEXT NOT NULL,
    description VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);