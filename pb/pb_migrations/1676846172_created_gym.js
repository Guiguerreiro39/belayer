migrate((db) => {
  const collection = new Collection({
    "id": "1nk4z9kfhfz18dj",
    "created": "2023-02-19 22:36:12.321Z",
    "updated": "2023-02-19 22:36:12.321Z",
    "name": "gym",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uzcyo4pf",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "frthbfik",
        "name": "country",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "portugal",
            "japan"
          ]
        }
      },
      {
        "system": false,
        "id": "lyf5ii5a",
        "name": "address",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nas5fwgw",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "niwch6yo",
        "name": "phone",
        "type": "number",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("1nk4z9kfhfz18dj");

  return dao.deleteCollection(collection);
})
