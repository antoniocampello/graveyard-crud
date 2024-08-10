-- @@ Database - Graveyard

CREATE DATABASE graveyard;
USE graveyard;

CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    date_of_death DATE NOT NULL,
    gender TEXT CHECK(gender IN ('Male', 'Female', 'Other')) NOT NULL,
    nationality TEXT,
    marital_status TEXT CHECK(marital_status IN ('Single', 'Married', 'Divorced', 'Widowed')) NOT NULL
);

-- @@ Populating Table `people`

INSERT INTO people (name, date_of_birth, date_of_death, gender, nationality, marital_status)
VALUES
('Robert Miller', '1940-07-15', '2023-08-12', 'Male', 'American', 'Widowed'),
('Linda Davis', '1955-03-22', '2023-10-25', 'Female', 'Canadian', 'Married'),
('David Wilson', '1982-11-11', '2024-06-18', 'Male', 'British', 'Single'),
('Sophia Martinez', '1968-09-30', '2024-01-09', 'Female', 'Spanish', 'Divorced'),
('Michael Brown', '1979-05-05', '2024-07-14', 'Male', 'Australian', 'Married'),
('Isabella Garcia', '1995-12-02', '2024-04-20', 'Female', 'Mexican', 'Single'),
('Daniel Anderson', '1960-01-13', '2024-02-15', 'Male', 'American', 'Widowed'),
('Olivia Scott', '1948-06-25', '2023-12-05', 'Female', 'Canadian', 'Married'),
('James Thomas', '1972-08-19', '2024-03-22', 'Male', 'British', 'Divorced'),
('Emma Taylor', '1988-10-17', '2024-05-29', 'Female', 'Australian', 'Single'),
('William Jones', '1952-04-07', '2024-08-14', 'Male', 'American', 'Married'),
('Ava Clark', '1977-11-23', '2024-01-30', 'Female', 'Spanish', 'Widowed'),
('Ethan White', '1990-02-10', '2024-06-05', 'Male', 'Mexican', 'Single'),
('Mia Lewis', '1985-12-01', '2024-07-20', 'Female', 'British', 'Married'),
('Benjamin Hall', '1943-05-19', '2023-11-07', 'Male', 'Canadian', 'Divorced'),
('Charlotte Allen', '1971-09-12', '2024-03-13', 'Female', 'Australian', 'Widowed'),
('Jacob Young', '1980-04-25', '2024-05-05', 'Male', 'American', 'Married'),
('Amelia King', '1964-11-08', '2024-08-22', 'Female', 'Spanish', 'Single'),
('Alexander Wright', '1992-03-30', '2024-06-10', 'Male', 'Mexican', 'Divorced'),
('Harper Lewis', '2000-07-17', '2024-01-25', 'Female', 'British', 'Single');

-- @@ Consulting

SELECT * FROM people;

-- @@ Reverting Actions
-- DROP DATABASE graveyard;
