# TASKFLOW API

TASKFLOW is a RESTful Task Management API developed with Node.js and Express.js.

The application allows users to create, list, view, update, and delete tasks. Task data is stored in a JSON file. The project also includes custom logger and validation middleware.

## Features

- Create a new task
- List all tasks
- Get a task by ID
- Update an existing task
- Delete a task
- JSON-based data storage
- Custom logger middleware
- Task validation middleware
- RESTful API structure

## Technologies

- Node.js
- Express.js
- JavaScript
- JSON
- Nodemon
- Postman

## Project Structure

```text
taskflow-api/
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── data/
│   │   └── tasks.json
│   ├── middleware/
│   │   ├── logger.js
│   │   └── validation.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── app.js
├── .gitignore
├── .nvmrc
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/sedaahi/taskflow-api
```

Navigate to the project directory:

```bash
cd taskflow-api
```

Use the Node.js version defined in `.nvmrc`:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

## Running the Application

Run the application in development mode:

```bash
npm run dev
```

Run the application in standard/start mode:

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

## API Endpoints


| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Get all tasks           |
| GET    | `/api/tasks/:id` | Get a task by ID        |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

## Task Model

Example task:

```json
{
  "id": 1,
  "title": "Login ekranını geliştir",
  "description": "Kullanıcı giriş ekranının geliştirilmesi",
  "status": "pending",
  "priority": "high",
  "assignee": "Seda",
  "createdAt": "2026-09-22T14:00:00.000Z"
}
```

## Create Task

**POST**

```text
/api/tasks
```

Example request body:

```json
{
  "title": "Dashboard ekranını geliştir",
  "description": "Dashboard arayüzünü geliştir ve görev istatistiklerini göster",
  "status": "in-progress",
  "priority": "high",
  "assignee": "Seda"
}
```

The `id` and `createdAt` fields are generated automatically by the application.

## Update Task

**PUT**

```text
/api/tasks/:id
```

Example request body:

```json
{
  "status": "completed",
  "priority": "medium"
}
```

Only the provided fields are updated while the existing task data is preserved.

## Delete Task

**DELETE**

```text
/api/tasks/:id
```

If the task exists, it is removed from the JSON data file.

## Validation Middleware

The application includes validation middleware for creating new tasks.

The following fields are required:

- `title`
- `description`
- `priority`
- `assignee`

The `priority` field must contain one of the following values:

- `low`
- `medium`
- `high`

If a required field is missing or an invalid priority value is provided, the API returns:

```text
400 Bad Request
```

Example error response:

```json
{
  "message": "Title, description, priority and assignee are required"
}
```

Example invalid priority response:

```json
{
  "message": "Priority must be low, medium or high"
}
```

## HTTP Status Codes

The API uses the following status codes:

- `200 OK` — Successful GET, PUT or DELETE request
- `201 Created` — Task successfully created
- `400 Bad Request` — Required task fields are missing or the priority value is invalid
- `404 Not Found` — Requested task could not be found

## Logger Middleware

The application includes a custom logger middleware that logs incoming HTTP requests.

Example:

```text
[2026-09-22T16:05:06.605Z] GET /api/tasks
[2026-09-22T16:06:10.120Z] POST /api/tasks
[2026-09-22T16:07:25.430Z] PUT /api/tasks/3
[2026-09-22T16:08:30.220Z] DELETE /api/tasks/3
```

Each log contains:

- Timestamp
- HTTP method
- Requested endpoint

## API Testing

The API endpoints were tested using Postman.

The following CRUD operations were verified:

- Get all tasks
- Get task by ID
- Create a new task
- Update an existing task
- Delete a task

Validation scenarios were also tested, including:

- Missing required fields
- Invalid priority values

## Author

Seda Ahi

# TASKFLOW API

TASKFLOW is a RESTful Task Management API developed with Node.js and Express.js.

The application allows users to create, list, view, update, and delete tasks. Task data is stored in a JSON file. The project also includes custom logger and validation middleware.

## Features

- Create a new task
- List all tasks
- Get a task by ID
- Update an existing task
- Delete a task
- JSON-based data storage
- Custom logger middleware
- Task validation middleware
- RESTful API structure

## Technologies

- Node.js
- Express.js
- JavaScript
- JSON
- Nodemon
- Postman

## Project Structure

```text
taskflow-api/
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── data/
│   │   └── tasks.json
│   ├── middleware/
│   │   ├── logger.js
│   │   └── validation.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── app.js
├── .gitignore
├── .nvmrc
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd taskflow-api
```

Use the Node.js version defined in `.nvmrc`:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

## Running the Application

Run the application in development mode:

```bash
npm run dev
```

Run the application in standard/start mode:

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

## API Endpoints


| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Get all tasks           |
| GET    | `/api/tasks/:id` | Get a task by ID        |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

## Task Model

Example task:

```json
{
  "id": 1,
  "title": "Login ekranını geliştir",
  "description": "Kullanıcı giriş ekranının geliştirilmesi",
  "status": "pending",
  "priority": "high",
  "assignee": "Seda",
  "createdAt": "2026-09-22T14:00:00.000Z"
}
```

## Create Task

**POST**

```text
/api/tasks
```

Example request body:

```json
{
  "title": "Dashboard ekranını geliştir",
  "description": "Dashboard arayüzünü geliştir ve görev istatistiklerini göster",
  "status": "in-progress",
  "priority": "high",
  "assignee": "Seda"
}
```

The `id` and `createdAt` fields are generated automatically by the application.

## Update Task

**PUT**

```text
/api/tasks/:id
```

Example request body:

```json
{
  "status": "completed",
  "priority": "medium"
}
```

Only the provided fields are updated while the existing task data is preserved.

## Delete Task

**DELETE**

```text
/api/tasks/:id
```

If the task exists, it is removed from the JSON data file.

## Validation Middleware

The application includes validation middleware for creating new tasks.

The following fields are required:

- `title`
- `description`
- `priority`
- `assignee`

The `priority` field must contain one of the following values:

- `low`
- `medium`
- `high`

If a required field is missing or an invalid priority value is provided, the API returns:

```text
400 Bad Request
```

Example error response:

```json
{
  "message": "Title, description, priority and assignee are required"
}
```

Example invalid priority response:

```json
{
  "message": "Priority must be low, medium or high"
}
```

## HTTP Status Codes

The API uses the following status codes:

- `200 OK` — Successful GET, PUT or DELETE request
- `201 Created` — Task successfully created
- `400 Bad Request` — Required task fields are missing or the priority value is invalid
- `404 Not Found` — Requested task could not be found

## Logger Middleware

The application includes a custom logger middleware that logs incoming HTTP requests.

Example:

```text
[2026-09-22T16:05:06.605Z] GET /api/tasks
[2026-09-22T16:06:10.120Z] POST /api/tasks
[2026-09-22T16:07:25.430Z] PUT /api/tasks/3
[2026-09-22T16:08:30.220Z] DELETE /api/tasks/3
```

Each log contains:

- Timestamp
- HTTP method
- Requested endpoint

## API Testing

The API endpoints were tested using Postman.

The following CRUD operations were verified:

- Get all tasks
- Get task by ID
- Create a new task
- Update an existing task
- Delete a task

Validation scenarios were also tested, including:

- Missing required fields
- Invalid priority values

## Author

Seda Ahi

TASKFLOW is a RESTful Task Management API developed with Node.js and Express.js.

The application allows users to create, list, view, update, and delete tasks. Task data is stored in a JSON file, and a custom logger middleware records incoming API requests.

## Features

- Create a new task
- List all tasks
- Get a task by ID
- Update an existing task
- Delete a task
- JSON-based data storage
- Custom logger middleware
- RESTful API structure

## Technologies

- Node.js
- Express.js
- JavaScript
- JSON
- Nodemon
- Postman

## Project Structure

```text
taskflow-api/
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── data/
│   │   └── tasks.json
│   ├── middleware/
│   │   └── logger.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── app.js
├── .gitignore
├── .nvmrc
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd taskflow-api
```

Use the Node.js version defined in `.nvmrc`:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

## Running the Application

Development mode:

```bash
npm run dev
```

Production/start mode:

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

## API Endpoints


| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Get all tasks           |
| GET    | `/api/tasks/:id` | Get a task by ID        |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

## Task Model

Example task:

```json
{
  "id": 1,
  "title": "Login ekranını geliştir",
  "description": "Kullanıcı giriş ekranının geliştirilmesi",
  "status": "pending",
  "priority": "high",
  "assignee": "Seda",
  "createdAt": "2026-09-22T14:00:00.000Z"
}
```

## Create Task

**POST**

```text
/api/tasks
```

Example request body:

```json
{
  "title": "Dashboard ekranını geliştir",
  "description": "Dashboard arayüzünü geliştir ve görev istatistiklerini göster",
  "status": "in-progress",
  "priority": "high",
  "assignee": "Seda"
}
```

The `id` and `createdAt` fields are generated by the application.

## Update Task

**PUT**

```text
/api/tasks/:id
```

Example:

```json
{
  "status": "completed",
  "priority": "medium"
}
```

Only the provided fields can be updated while the existing task data is preserved.

## Delete Task

**DELETE**

```text
/api/tasks/:id
```

If the task exists, it is removed from the JSON data file.

## HTTP Status Codes

The API uses the following status codes:

- `200 OK` — Successful GET, PUT or DELETE request
- `201 Created` — Task successfully created
- `404 Not Found` — Requested task could not be found

## Logger Middleware

The application includes a custom logger middleware that logs incoming HTTP requests.

Example:

```text
[2026-09-22T16:05:06.605Z] GET /api/tasks
[2026-09-22T16:06:10.120Z] POST /api/tasks
[2026-09-22T16:07:25.430Z] PUT /api/tasks/4
[2026-09-22T16:08:30.220Z] DELETE /api/tasks/4
```

Each log contains:

- Timestamp
- HTTP method
- Requested endpoint

## API Testing

The API endpoints were tested using Postman.

The following operations were verified:

- Get all tasks
- Get task by ID
- Create task
- Update task
- Delete task

## Author

Seda Ahi
