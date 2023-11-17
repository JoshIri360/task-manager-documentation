---
sidebar_position: 1
---

# Create Task

This endpoint creates a new task.

**URL** : `localhost:3000/tasks`

**Method** : `POST`

**Data constraints**

```json
{
  "title": "[string]",
  "description": "[string]",
  "priority": "[integer between 1 and 3]",
  "dueDate": "[date in 'yyyy-mm-dd' format]",
  "completed": "[boolean]"
}
```

**Data example**

```json
{
  "title": "Test Task 2",
  "description": "This is also a test task",
  "priority": 2,
  "dueDate": "2023-10-31",
  "completed": false
}
```

## Success Response

**Condition** : If everything is OK, a new task is created.

**Code** : `201 Created`

**Content example**

```json
{
    "completed": false,
    "_id": "65578a0abbda9329cc32f367",
    "title": "Test Task 2",
    "description": "This is also a test task",
    "priority": 2,
    "dueDate": "2023-10-31T00:00:00.000Z",
    "createdAt": "2023-11-17T15:43:06.260Z",
    "updatedAt": "2023-11-17T15:43:06.260Z",
    "__v": 0
}
```

## Rules

The task object is considered valid if:

- `title` is a string.
- `description` is a string.
- `priority` is a number between 1 and 3.
- `dueDate` is a Date object.
- `completed` is a boolean.