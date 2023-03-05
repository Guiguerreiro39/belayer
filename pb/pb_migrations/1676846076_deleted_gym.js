migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5r9mtr0n7dv2tb0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "5r9mtr0n7dv2tb0",
    "created": "2023-02-19 22:32:02.239Z",
    "updated": "2023-02-19 22:33:32.591Z",
    "name": "gym",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uabjnyt6",
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
        "id": "sd1qjq46",
        "name": "country",
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
        "id": "a0ilhyt7",
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
        "id": "jra9wrly",
        "name": "phone",
        "type": "number",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "o83ax2qt",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
})
