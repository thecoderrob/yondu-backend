# Basic User Management System

API Backend Node.js Diagnostic Exam

## Installing the dependencies

1. Open the terminal and navigate to the root folder
2. Type 'npm i or npm install' to install the backend dev dependencies
3. Navigate to '/yondu-backend/frontend'
4. Type 'npm i or npm install' to install the frontend dev dependencies

## Adding the .env file

1. Open the terminal and navigate to the root folder.
2. Create a '.env' file
3. Add the following values to your .env file

MYSQL_USER='root' // Change or keep based on your MySQL credentials
MYSQL_PASSWORD='' // Change or keep based on your MySQL credentials
MYSQL_HOST='localhost' // Change or keep based on your MySQL credentials
MYSQL_DATABASE='users_db' // Keep this as is

JWT_SECRET='secret' // You can change this to whatever you want

## Migration

1. Open the terminal and navigate to '/yondu-backend/backend'
2. Type 'npx sequelize db:migrate' or 'sequelize db:migrate' if you have sequelize-cli installed globally

## Seeding

1. Open the terminal and navigate to '/yondu-backend/backend'
2. Type 'npx sequelize db:seed:all' or 'sequelize db:seed:all' if you have sequelize-cli installed globally

## Running the frontend and backend servers concurrently

1. Open the terminal and navigate to the root folder
2. Type 'npm run dev'

## Running the frontend and backend servers on different terminals

1. Open the terminal and navigate to the root folder
2. On the first terminal, type 'npm run server'
3. On the second terminal, type 'npm run client'

## Login Credentials

Admin

- username: admin
- password: admin123

Random user

- username: _randomly generated username_
- password: _the user's firstname (case sensitive)_
