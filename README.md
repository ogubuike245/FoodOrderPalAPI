# FoodOrderPalAPI

FoodOrderPalAPI is a backend API for a restaurant application that allows users to browse the menu,
place orders, and manage tables.

# Table of Contents

-   Installation
-   Usage
-   API Reference
-   Contributing
-   License

# Installation

To run the FoodOrderPalAPI on your local machine, you will need to have the following software
installed:

-   Node.js (v12 or higher)
-   MongoDB To get started, clone this repository to your local machine and install the
    dependencies:

```bash
git clone https://github.com/ogubuike245/FoodOrderPalAPI.git
cd FoodOrderPalAPI
npm install
```

Next, create a .env file in the root directory of the project and set the following environment
variables:

```
# SERVER AND DATABASE CONFIG:

                  API_PORT=5000
                  MONG0_DB_URI="mongodb://localhost:27017/admin"
                  API_URL=/api/v1

# JWT VARIABLES:

                  JWT_SECRET="JWT_SECRET"
                  JWT_NAME="JWT_NAME"
                  MAX_AGE=3h
                  VERIFY_URL=http://localhost:5000/api/v1/user/verify
                  Replace your-secret-key with a unique secret key for your application.


# EMAIL VARIABLES:

                  EMAIL_SERVICE=""
                  EMAIL_ADDRESS=""
                  EMAIL_PASSWORD=""
```

Finally, start the server by running:

```bash
npm start
```

# Usage

To use the FoodOrderPalAPI, you can make HTTP requests to the available endpoints. The API endpoints
are documented in the API Reference section below.

# API Reference

The FoodOrderPalAPI provides the following endpoints:

-   GET /menu: Retrieves the restaurant's menu

-   GET /menu/:id: Retrieves a specific menu item by its ID

-   POST /menu: Creates a new menu item

-   PUT /menu/:id: Updates a menu item by its ID

-   DELETE /menu/:id: Deletes a menu item by its ID

-   GET /orders: Retrieves all orders

-   GET /orders/:id: Retrieves a specific order by its ID

-   POST /orders: Creates a new order

-   PUT /orders/:id: Updates an order by its ID

-   DELETE /orders/:id: Deletes an order by its ID

-   GET /tables: Retrieves all tables in the restaurant

-   GET /tables/:id: Retrieves a specific table by its ID

-   POST /tables: Creates a new table

-   PUT /tables/:id: Updates a table by its ID

-   DELETE /tables/:id: Deletes a table by its ID

-   POST /register: Creates a new user account

-   POST /login: Logs a user into their account

-   GET /users/:id: Retrieves a specific user by their ID

-   PUT /users/:id: Updates a user's account information by their ID

For more detailed information about each endpoint, refer to the API documentation in the `/docs`
folder.

# Contributing

Contributions to the FoodOrderPalAPI project are welcome! To contribute, please follow these steps:

-   Fork this repository to your own GitHub account and clone it to your local machine.
-   Create a new branch for your feature/bugfix.
-   Make changes to the code and write tests to ensure the changes work as expected.
-   Submit a pull request to the main repository with a description of the changes made.

# License

This project is licensed under the MIT license.
