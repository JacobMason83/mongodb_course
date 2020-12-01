

// #mongo db is very easy , its a no sql database 

// how to create a database, and a admin user
// type show dbs will show databases
// use mongoCourse    // will create a database, and wont show up until you put data in it, and will create a database named mongocourse
//db will return mongoCourse 
db.createUser({
    user: 'jordan',
    pwd: 'password',
    customData: {startDate: new Date()}, // will create a custom date object in it
    roles: [
        {role: 'clusterAdmin', db: 'admin'},
        {role: 'readAnyDatabase', db: 'admin'},
        'readWrite'
    ]
})
// this is creating an admin for using the database, and this is a login username and password and 
// you would have to use a connection string to do it 
// it would be mongodb+srv://username:password@host(where it lives)
db.createUser({
    user: 'Jacob',
    pwd: 'password',
    customData: {startDate: new Date()}, // will create a custom date object in it
    roles: [
        {role: 'clusterAdmin', db: 'admin'},
        {role: 'readAnyDatabase', db: 'admin'},
        'readWrite'
    ]
})

db.dropUser('jon')
db.getUsers()
// creating a database to manage a book collection 
db.createCollection('books') // creating a collection of books , and your creating documents for the colleciton
// returns {"ok" : 1} this is very familar , and what you get in any kind of js enviroment, and this is why front
// end community has fell in love with it 
//show collections // will return books and will show you that its in the system
// mongo is as close as you can get to pure code in a db program 
// script for adding books is in the mongo js file withing the mongo file
// mongo doesnt have a schema , but it does cause you can create one, but it doesnt need it 
// but mongo will take whatever you throw at it, its a double edge sword 
// inserting many documents into a database 

db.books.find({name: "Mob Man will die"})

// projections for mongo db  your just projecting what fields that you want 
db.books.find(
    {
        name: "Confident Rudy"
    },
    {
        publishedDate: 1,
        authors: 1
    }
).pretty()
db.books.find(
    {
        name: "Confident Rudy"
    },
    {
        name:1,
        publishedDate: 1,
        authors: 1
    }
).pretty()

// how to query for a specific portion of the book and will impliment a regular
//  expressions, and alow you to search for patterns
db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});
db.books.findOne({ name: /.*deep work.*/i }) // whenever you see slashes in between slashes your trying to match content
// i just means ignore capital 
// how to remove documents in mongo db 
db.books.remove({name: "OOP Programming"}, 1) // Removes a single document
db.books.remove({name: "OOP Programming"}) // Removes all documents
// how to query for nested documents, and would do this alot in a production application 
db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcolm Gladwell", "active": "true" },
        { "name": "Ghost Writer", "active": "true" }
    ]
});// this is the document that has nested elements in it 
db.books.find(
    {
        name: "Blink",
    },
    {
        name:1,
        publishedDate: 1,
        "authors.name": 1 // will bring back authors.name , and wont bring back if they are active or not , just the names
    }
);
// returned { "_id" : ObjectId("5fc6bb001539e5fc112c6d68"), "name" : "Blink", "publishedDate" : ISODate("2020-12-01T21:52:00.869Z"), "authors" : [ { "name" : "Malcolm Gladwell" }, { "name" : "Ghost Writer" } ] }

