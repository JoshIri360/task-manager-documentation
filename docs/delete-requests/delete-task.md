# Delete Task

This endpoint deletes a specific task by its ID.

**URL** : `localhost:3000/tasks/:id`

**Method** : `DELETE`

**URL Parameters** : `id=[string]` where `id` is the ID of the task.

**Example** : `localhost:3000/tasks/6555d96d12ebcee43fbba4bf`

## Success Response

**Condition** : If everything is OK and the task is found and deleted.

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Task successfully deleted"
}
```

The response object includes a message indicating that the task was successfully deleted.