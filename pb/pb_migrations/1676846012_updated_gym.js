migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5r9mtr0n7dv2tb0")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5r9mtr0n7dv2tb0")

  // remove
  collection.schema.removeField("a0ilhyt7")

  // remove
  collection.schema.removeField("jra9wrly")

  // remove
  collection.schema.removeField("o83ax2qt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uabjnyt6",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
