---
sidebar_position: 1
---

# Update Task

This endpoint updates a specific task by its ID.

**URL** : `localhost:3000/tasks/:id`

**Method** : `PUT`

**URL Parameters** : `id=[string]` where `id` is the ID of the task.

**Data constraints**

```json
{
  "title": "[string]",
  "description": "[string]",
  "completed": "[boolean]"
}
```

**Data example**

```json
{
  "description": "This was updated"
}
```

## Success Response

**Condition** : If everything is OK and the task is found and updated.

**Code** : `200 OK`

**Content example**

```json
{
    "completed": false,
    "_id": "65575f418577382f8ce148e6",
    "title": "Test Task 2",
    "description": "This was updated",
    "priority": 2,
    "dueDate": "2022-12-31T00:00:00.000Z",
    "createdAt": "2023-11-17T12:40:33.324Z",
    "updatedAt": "2023-11-17T15:54:54.914Z",
    "__v": 0
}
```

The response object represents the updated task and includes the following properties:

- `completed`: A boolean indicating whether the task is completed.
- `_id`: The unique identifier for the task.
- `title`: The title of the task.
- `description`: The updated description of the task.
- `priority`: The priority level of the task, represented as an integer.
- `dueDate`: The due date for the task, represented in ISO 8601 date format.
- `createdAt`: The creation date of the task, represented in ISO 8601 date format.
- `updatedAt`: The last update date of the task, represented in ISO 8601 date format.
- `__v`: The version key, used internally by MongoDB.

## Fields that can be updated

- `title`: The title of the task.
- `description`: The description of the task.
- `completed`: The completion status of the task.