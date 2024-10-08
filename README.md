MONGO DB BLOG API

DESCRIPTION

The Blog API is a RESTful API built with Node.js, Express, MongoDB with Mongoose and designed for managing a blog system. It includes functionality for managing users, posts, and comments. The API allows for basic CRUD (Create, Read, Update, Delete) operations and includes validation to ensure data integrity.

FEATURES

User Management:
Create, read, update, and delete users.

Post Management:
Create, read, update, and delete posts.

Comment Management:
Create, read, update, and delete comments.

Technologies Used:
- Node.js
- Express
- MongoDB with Mongoose

SETUP
Prerequisites

- Node.js
- MongoDB

INSTALLATION

Clone the repository:

bash
git clone https://github.com/yourusername/blog-api.git

Navigate to the project directory:

bash
Install dependencies

bash
npm install

Create a .env file in the root directory and add the following environment variables:

env
PORT={port of your choosing}
MONGO_URI={your mongodb connection string}
Start the application:

bash
npm start


API Documentation

USERS
Get All Users:
GET /users
Description: Retrieve a list of all users.
Get User by ID

GET /users/:id
Description: Retrieve a specific user by ID.

Create User:
POST /users
Description: Create a new user.
Request Body:
json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "createdAt": "ISO8601 date string (optional)"
}

Update User:
PATCH /users/:id
Description: Update a specific user by ID.
Request Body:
json
{
  "username": "string (optional)",
  "email": "string (optional)",
  "password": "string (optional)"
}

Delete User:
DELETE /users/:id
Description: Delete a specific user by ID.


POSTS
Get All Posts:
GET /posts
Description: Retrieve a list of all posts. Optionally, filter posts by username.
Query Parameters:
username (optional): Filter posts by the author's username.

Get Post by ID:
GET /posts/:id
Description: Retrieve a specific post by ID.

Create Post:
POST /posts
Description: Create a new post.
Request Body:
json
{
  "title": "string",
  "username": "string",
  "content": "string",
  "createdAt": "ISO8601 date string (optional)"
}

Update Post:
PATCH /posts/:id
Description: Update a specific post by ID.
Request Body:
json
{
  "title": "string (optional)",
  "content": "string (optional)"
}

Delete Post:
DELETE /posts/:id
Description: Delete a specific post by ID.


COMMENTS
Get All Comments:
GET /comments
Description: Retrieve a list of all comments.

Get Comment by ID:
GET /comments/:id
Description: Retrieve a specific comment by ID.

Create Comment:
POST /comments
Description: Create a new comment.
Request Body:
json
{
  "author": "string (ObjectId)",
  "content": "string",
  "post": "string (ObjectId)",
  "createdAt": "ISO8601 date string (optional)"
}

Update Comment:
PATCH /comments/:id
Description: Update a specific comment by ID.
Request Body:
json
{
  "content": "string (optional)"
}

Delete Comment:
DELETE /comments/:id
Description: Delete a specific comment by ID.


ERROR HADNLING:

400 Bad Request: The request could not be understood or was missing required parameters.
404 Not Found: The requested resource could not be found.
500 Internal Server Error: An error occurred on the server