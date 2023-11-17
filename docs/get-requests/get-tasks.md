---
sidebar_position: 1
---

# Get Tasks

This endpoint retrieves a list of tasks.

**URL** : `localhost:3000/tasks`

**Method** : `GET`

## Success Response

**Condition** : If everything is OK and tasks are found.

**Code** : `200 OK`

**Content example**

```json
[
    {
        "completed": true,
        "_id": "6555d96d12ebcee43fbba4bf",
        "title": "Task 2",
        "description": "This is task 2",
        "priority": 1,
        "dueDate": "2022-11-30T00:00:00.000Z"
    },
    {
        "completed": false,
        "_id": "6555d96d12ebcee43fbba4c0",
        "title": "Task 3",
        "description": "This is task 3",
        "priority": 2,
        "dueDate": "2023-01-31T00:00:00.000Z"
    },
    {
        "completed": true,
        "_id": "6555d96d12ebcee43fbba4c1",
        "title": "Task 4",
        "description": "This is task 4",
        "priority": 2,
        "dueDate": "2022-10-31T00:00:00.000Z"
    }
]
```

Each object in the response array represents a task and includes the following properties:

- `completed`: A boolean indicating whether the task is completed.
- `_id`: The unique identifier for the task.
- `title`: The title of the task.
- `description`: A description of the task.
- `priority`: The priority level of the task, represented as an integer.
- `dueDate`: The due date for the task, represented in ISO 8601 date format.