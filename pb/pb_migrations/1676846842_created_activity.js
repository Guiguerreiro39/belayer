migrate((db) => {
  const collection = new Collection({
    "id": "wfixpqr7gjpliiy",
    "created": "2023-02-19 22:47:21.996Z",
    "updated": "2023-02-19 22:47:21.996Z",
    "name": "activity",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dt89bgma",
        "name": "attempts",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null
        }
      },
      {
        "system": false,
        "id": "yvrvh6dt",
        "name": "completed",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "rrlzydir",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "sceodoyq",
        "name": "wall",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "mahv12qyok91eit",
          "cascadeDelete": false,
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
  const collection = dao.findCollectionByNameOrId("wfixpqr7gjpliiy");

  return dao.deleteCollection(collection);
})
