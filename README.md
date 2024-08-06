# E-comFast

# typescript-microservices-pharmaceutical

## Description


## How to configure:
1. Install dependencies
```bash
npm init -y

npm install typescript ts-node @types/node --save-dev
npm install express @types/express
npm install nodemon --save-dev
npm install dotenv

npm install --save tsyringe
npm install --save-dev @types/node @types/validator @types/sequelize
npm install sequelize reflect-metadata sequelize-typescript


npx tsc --init

$ npm install jsonwebtoken
npm install -D @types/jsonwebtoken
```

## Introducción:
This workshop is designed within the stores industry environment to demonstrate JavaScript skills using TypeScript.


## Packages
### typescript
TypeScript adds static typing to JavaScript, enhancing code quality and maintainability. It helps catch errors early during development, making the codebase more robust and easier to refactor.

### ts-node
Ts-node allows TypeScript files to be run directly, eliminating the need for a separate compilation step during development. This streamlines the workflow and speeds up the development process.

### @types/node
Provides TypeScript type definitions for Node.js, ensuring accurate type checking and better developer experience through IntelliSense support in editors.

### express
Express is a fast, unopinionated web framework for Node.js, used to build APIs and microservices. It simplifies routing, middleware management, and request handling.

### @types/express
Provides TypeScript type definitions for Express, ensuring type safety and improved developer productivity by enabling IntelliSense and code completion.

### nodemon
Nodemon automatically restarts the Node.js application when file changes are detected, which enhances development efficiency by eliminating the need to manually restart the server.

### dotenv
Dotenv loads environment variables from a .env file into process.env. This is essential for configuring environment-specific settings securely and conveniently.

### tsyringe
TSyringe is a dependency injection library for TypeScript. It helps manage class dependencies in a clean and maintainable way, promoting modular and testable code architecture.

### @types/validator
Provides TypeScript type definitions for the validator library, which includes functions for string validation and sanitization. This ensures type safety and better code quality.

### sequelize
Sequelize is an ORM for Node.js that supports multiple SQL databases. It simplifies database interactions by providing an abstraction layer for database queries and transactions.

### reflect-metadata
Reflect-metadata enables the use of decorators and metadata reflection in TypeScript, which is crucial for advanced TypeScript features like dependency injection and ORM integration.

### sequelize-typescript
Sequelize-typescript adds TypeScript support to Sequelize, allowing for type-safe ORM operations and improving code maintainability in database interactions.

### jsonwebtoken
Jsonwebtoken is a library for creating and verifying JSON Web Tokens, commonly used for secure authentication and authorization in microservices architectures.

### @types/jsonwebtoken
Provides TypeScript type definitions for jsonwebtoken, ensuring accurate type checking and enhancing developer experience through better tooling support.