db.createUser({
    user: "jeevon",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "shopdb"
        }
    ]
})