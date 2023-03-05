migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xe3tqk0c",
    "name": "gyms",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1nk4z9kfhfz18dj",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("xe3tqk0c")

  return dao.saveCollection(collection)
})
