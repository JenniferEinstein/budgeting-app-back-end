DROP DATABASE IF EXISTS budgeting_app;
CREATE DATABASE budgeting_app;

\c budgeting_app;

DROP TABLE IF EXISTS transacations;
CREATE TABLE transacations (
    id serial PRIMARY KEY,
    date TEXT NOT NULL DEFAULT CURRENT_DATE,
    from VARCHAR (255) TEXT NOT NULL,
    item_name TEXT,
    category VARCHAR (50) TEXT,
    amount NUMERIC(5,2) NOT NULL,
    payment_type VARCHAR (255) TEXT,
    tax_related BOOLEAN DEFAULT false,
    notes TEXT
)