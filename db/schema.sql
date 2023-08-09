DROP DATABASE IF EXISTS budgeting-app;
CREATE DATABASE budgeting-app;

\c budgeting-app;

DROP TABLE IF EXISTS transacations;
CREATE TABLE transacations (
    id serial PRIMARY KEY,
    purchase_date DATE NOT NULL DEFAULT CURRENT_DATE,
    vendor VARCHAR (255) TEXT NOT NULL,
    description TEXT,
    category VARCHAR (50) TEXT,
    cost NUMERIC(5,2) NOT NULL,
    payment_type VARCHAR (255) TEXT,
    tax_related BOOLEAN DEFAULT false,
    notes TEXT
)