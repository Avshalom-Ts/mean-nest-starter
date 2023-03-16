db.createUser({
    user: "user",
    pwd: "secretPassword",
    roles: [ { role: "dbOwner", db: "coco" } ]
  })
  
  db.users.insert({
    name: "user"
  })