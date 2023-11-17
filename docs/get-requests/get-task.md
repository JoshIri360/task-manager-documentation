---
sidebar_position: 2
---

# Get Task

This endpoint retrieves a specific task by its ID.

**URL** : `localhost:3000/tasks/:id`

**Method** : `GET`

**URL Parameters** : `id=[string]` where `id` is the ID of the task.

**Example** : `localhost:3000/tasks/6555d96d12ebcee43fbba4bf`

## Success Response

**Condition** : If everything is OK and the task is found.

**Code** : `200 OK`

**Content example**

```json
{
    "completed": true,
    "_id": "6555d96d12ebcee43fbba4bf",
    "title": "Task 2",
    "description": "This is task 2",
    "priority": 1,
    "dueDate": "2022-11-30T00:00:00.000Z"
}
```

The response object represents a task and includes the following properties:

- `completed`: A boolean indicating whether the task is completed.
- `_id`: The unique identifier for the task.
- `title`: The title of the task.
- `description`: A description of the task.
- `priority`: The priority level of the task, represented as an integer.
- `dueDate`: The due date for the task, represented in ISO 8601 date format.