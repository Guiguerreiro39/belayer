migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1nk4z9kfhfz18dj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aaa9j3g5",
    "name": "users",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1nk4z9kfhfz18dj")

  // remove
  collection.schema.removeField("aaa9j3g5")

  return dao.saveCollection(collection)
})
