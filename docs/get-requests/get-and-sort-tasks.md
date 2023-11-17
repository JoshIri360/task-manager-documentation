---
sidebar_position: 4
---

# Get Tasks and Sort

This endpoint retrieves a list of tasks and sorts them based on a specified field. By default, tasks are sorted by their creation date. This endpoint allows sorting by "dueDate" or "priority".

**URL** : `localhost:3000/tasks?sort=<field>`

**Method** : `GET`

**URL Parameters** : `sort=[string]` where `sort` is the field to sort by.

**Example** : `localhost:3000/tasks?sort=dueDate`

## Success Response

**Condition** : If everything is OK and tasks are found.

**Code** : `200 OK`

**Content example**

```json
[
    {
        "completed": false,
        "_id": "655789f6bbda9329cc32f365",
        "title": "Test Task 2",
        "description": "This is also a test task",
        "priority": 2,
        "dueDate": "2023-12-31T00:00:00.000Z",
        "createdAt": "2023-11-17T15:42:46.263Z",
        "updatedAt": "2023-11-17T15:42:46.263Z",
        "__v": 0
    },
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
    },
    {
        "completed": false,
        "_id": "6555de581d0afd466413e013",
        "title": "Test Task",
        "description": "This is a test task",
        "priority": 2,
        "dueDate": "2022-12-31T00:00:00.000Z",
        "createdAt": "2023-11-16T09:18:16.531Z",
        "updatedAt": "2023-11-16T09:18:16.531Z",
        "__v": 0
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
- `createdAt`: The creation date of the task, represented in ISO 8601 date format.
- `updatedAt`: The last update date of the task, represented in ISO 8601 date format.
- `__v`: The version key, used internally by MongoDB.