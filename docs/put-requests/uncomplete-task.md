---
sidebar_position: 3
---

# Uncomplete Task

This endpoint marks a specific task as uncompleted by its ID.

**URL** : `localhost:3000/tasks/:id/uncomplete`

**Method** : `PUT`

**URL Parameters** : `id=[string]` where `id` is the ID of the task.

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
    "updatedAt": "2023-11-17T16:00:54.056Z",
    "__v": 0
}
```

The response object represents the updated task and includes the following properties:

- `completed`: A boolean indicating that the task is now completed.
- `_id`: The unique identifier for the task.
- `title`: The title of the task.
- `description`: The description of the task.
- `priority`: The priority level of the task, represented as an integer.
- `dueDate`: The due date for the task, represented in ISO 8601 date format.
- `createdAt`: The creation date of the task, represented in ISO 8601 date format.
- `updatedAt`: The last update date of the task, represented in ISO 8601 date format.
- `__v`: The version key, used internally by MongoDB.