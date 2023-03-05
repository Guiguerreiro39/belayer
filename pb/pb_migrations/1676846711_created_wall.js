migrate((db) => {
  const collection = new Collection({
    "id": "mahv12qyok91eit",
    "created": "2023-02-19 22:45:11.585Z",
    "updated": "2023-02-19 22:45:11.585Z",
    "name": "wall",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cprrpwaw",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "madhtfbr",
        "name": "level",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "6A",
            "6B",
            "6C",
            "7A",
            "7B",
            "7C"
          ]
        }
      },
      {
        "system": false,
        "id": "2axrz02a",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "boulder",
            "lead"
          ]
        }
      },
      {
        "system": false,
        "id": "obfrgqye",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "aj4nexgt",
        "name": "gym",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "1nk4z9kfhfz18dj",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mahv12qyok91eit");

  return dao.deleteCollection(collection);
})
