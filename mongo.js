// script fo inserting the book 
db.books.insert({ //inserting key value books into the collection 
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [
       { "name": "John Snow"},
       { "name": "Ned Stark" }
    ]
}) 
// inserting one document
db.books.insert({ //inserting key value books into the collection 
    "name": "OOP Programming",
    "publishedDate": new Date(),
    "authors": [
       { "name": "Jacob Mason"},
       { "name": "Rachel Mason"},
       { "name": "Cerberus Wolf" },
       { "name": "Tyr Phoniex" }
    ]
})
// inserting many documents into a mongo db 
db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            {name:"Avdi Grimm"}
        ]
    },    {
        "name": "Rudy",
        "publishedDate": new Date(),
        "authors": [
            {name:"Bling Bling"}
        ]
    },    {
        "name": "Confident Boy",
        "publishedDate": new Date(),
        "authors": [
            {name:"Tom Tkinter"}
        ]
    },    {
        "name": "Mob Man will die",
        "publishedDate": new Date(),
        "authors": [
            {name:"Donny Brasco"}
        ]
    }
])