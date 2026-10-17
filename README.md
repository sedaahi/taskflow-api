# TASKFLOW API

TASKFLOW is a RESTful Task Management API developed with Node.js and Express.js.

The application allows users to create, list, view, update, and delete tasks. Task data is stored in a JSON file. The project also includes custom logger and validation middleware, as well as filtering, search, pagination, sorting, and reporting features.

## Features

### Core Features

- Create a new task
- List all tasks
- Get a task by ID
- Update an existing task
- Delete a task
- JSON-based data storage
- RESTful API structure
- Custom logger middleware

### Additional Features

- Task validation middleware
- Filter tasks by status, priority, and assignee
- Search tasks by title and description
- Pagination
- Sort tasks by creation date
- Task reporting and statistics

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
├── docs/
│   └── postman/             # API test screenshots
├── .gitignore
├── .nvmrc
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

- Node.js **20.20.2**, as specified in `.nvmrc`
- npm
- NVM (optional, for managing Node.js versions)
- Postman (optional, for testing API requests)

## Installation

Clone the repository:

```bash
git clone https://github.com/sedaahi/taskflow-api.git
```

Navigate to the project directory:

```bash
cd taskflow-api
```

If you use NVM, activate the Node.js version defined in `.nvmrc`:

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


| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/tasks`        | Get all tasks           |
| GET    | `/api/tasks/:id`    | Get a task by ID        |
| GET    | `/api/tasks/report` | Get task statistics     |
| POST   | `/api/tasks`        | Create a new task       |
| PUT    | `/api/tasks/:id`    | Update an existing task |
| DELETE | `/api/tasks/:id`    | Delete a task           |

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

If `status` is not provided, its default value is `pending`.

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

The endpoint applies a partial update: only the provided fields are updated while the remaining task data is preserved.

The `id` and `createdAt` fields are preserved during the update operation.

## Delete Task

**DELETE**

```text
/api/tasks/:id
```

If the task exists, it is removed from the JSON data file.

## Filtering

Tasks can be filtered using query parameters.

### Filter by Status

```text
GET /api/tasks?status=pending
```

### Filter by Priority

```text
GET /api/tasks?priority=high
```

### Filter by Assignee

```text
GET /api/tasks?assignee=Seda
```

Multiple filters can also be combined:

```text
GET /api/tasks?status=pending&priority=high
```

## Search

Tasks can be searched by `title` and `description`.

Example:

```text
GET /api/tasks?search=login
```

The search is case-insensitive.

## Pagination

The API supports pagination using `page` and `limit` query parameters.

Example:

```text
GET /api/tasks?page=1&limit=1
```

- `page` defines the requested page.
- `limit` defines the number of tasks returned per page.

## Sorting

Tasks can be sorted by their creation date.

Oldest to newest:

```text
GET /api/tasks?sort=asc
```

Newest to oldest:

```text
GET /api/tasks?sort=desc
```

Sorting can also be combined with other query parameters.

Example:

```text
GET /api/tasks?priority=high&sort=desc
```

## Data Storage

Tasks are loaded from `src/data/tasks.json` when the server starts. Create, update, and delete operations write the updated task list back to this file, so changes persist across server restarts. No database setup is required.

## Validation Middleware

Validation middleware runs on `POST /api/tasks`. It checks that the required fields have truthy values and that the priority is one of the accepted values. This middleware is not applied to `PUT` requests.

The following fields are required:

- `title`
- `description`
- `priority`
- `assignee`

The `priority` field must contain one of the following values:

- `low`
- `medium`
- `high`

If a required field is missing, the API returns:

```text
400 Bad Request
```

Example:

```json
{
  "message": "Title, description, priority and assignee are required"
}
```

If an invalid priority value is provided:

```json
{
  "message": "Priority must be low, medium or high"
}
```

## Reporting

Task statistics are available through the reporting endpoint.

**GET**

```text
/api/tasks/report
```

Example response:

```json
{
  "totalTasks": 2,
  "byStatus": {
    "pending": 1,
    "in-progress": 1,
    "completed": 0
  },
  "byPriority": {
    "low": 0,
    "medium": 1,
    "high": 1
  }
}
```

The report provides:

- Total number of tasks
- Number of tasks by status
- Number of tasks by priority

## Logger Middleware

The application includes a custom logger middleware that logs incoming HTTP requests.

Example:

```text
[2026-10-07T07:13:17.443Z] GET /api/tasks
[2026-10-07T07:14:47.419Z] POST /api/tasks
[2026-10-07T07:16:10.120Z] PUT /api/tasks/3
[2026-10-07T07:17:30.220Z] DELETE /api/tasks/3
```

Each log contains:

- Timestamp
- HTTP method
- Requested endpoint

## HTTP Status Codes

The API uses the following status codes:

- `200 OK` — Successful GET, PUT, or DELETE request
- `201 Created` — Task successfully created
- `400 Bad Request` — Required task fields are missing or the priority value is invalid
- `404 Not Found` — Requested task could not be found

## API Testing

Postman test screenshots are available in [`docs/postman`](docs/postman).

The API was tested using Postman.

The following CRUD operations were verified:

- Get all tasks
- Get task by ID
- Create a new task
- Update an existing task
- Delete a task

The following additional features were also tested:

- Filtering
- Search
- Pagination
- Sorting
- Validation
- Reporting

## Scope and Limitations

This project was developed as a Node.js backend course project. It focuses on REST API fundamentals, routing, middleware, CRUD operations, and file-based persistence.

- No authentication or authorization is implemented.
- Task status values are not validated.
- Pagination parameters are not validated.
- JSON storage uses synchronous file writes and is intended for local learning and demonstration.
- There is no automated test suite configured; use Postman or another HTTP client to verify the API.

## Author

Seda Ahi
