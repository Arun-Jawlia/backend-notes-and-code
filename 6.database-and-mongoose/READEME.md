# DATABASE
- A database is a structured collection of data that is organized and stored in a way that allows for efficient retrieval, management, and modification.
  
- Databases are a fundamental component of information systems, and they are used to store and organize data in a systematic and accessible manner.

- Database is a software  handles CRUD login for us 
  
Databases play a crucial role in various applications, from small-scale projects to large enterprise systems, providing a structured and efficient means of storing and managing data. The choice of a specific database depends on factors such as data requirements, performance needs, scalability, and the nature of the application.


## Types of Databases:
1. **Relational Databases** (SQL - structured ) (e.g., MySQL, PostgreSQL, Oracle SQL , MS SQL): Organize data in tables with predefined relationships.
   
2. **NoSQL Databases** ( NoSQL - not strucutre) (e.g., MongoDB, Cassandra): Designed for handling unstructured or semi-structured data.
   
3. **In-Memory Databases**(e.g., Redis, Memcached): Store data in RAM for faster access.
   
4. **Graph Databases** (e.g., Neo4j): Designed for managing relationships between entities.



## What is MONGODB
- MongoDB is a popular open-source NoSQL (Not Only SQL) database management system that falls under the category of document-oriented databases. 

- It is designed to store, query, and process large volumes of data in a flexible, schema-free format. 
  
- MongoDB is known for its scalability, high performance, and ease of use, making it well-suited for a variety of applications, ranging from small projects to large-scale enterprise systems.

1. Non relational databases / NoSQL
2. High Performance 
3. Highly Scalable 
4. map/reduce aggregations
5. Autho Sharing

### Why use MONGODB
1. Document obect - key value pair database
2. Collections
    - Database - group of collections
    - collection - group of similar documents
    - documents - each object is called as a document (Json object)
3. Flexible Schemas
4. Unique object Id for every object





## Command to use mongdb in your PC
1. mongosb
2. show dbs - to see all dbs
3. use dbname - to use database (swiched to database)
4. show collections - show all collection in that database




## MONGODB CRUD Operation (in command line in pc)
   - mongosh 
   - show dbs
   - use database name 

<!-- Insert / Post -->
1. db.collectionname.insertOne({}) - insert only one document
2. db.collectionname.insertMany([{},{}]) - insert more than one document

<!-- See / Get -->
1. db.collection.find() - to read all document 
2. db.collection.find({id:1}) - to find element which id is 1 - based on which I want
3. db.collection.find({id:1, org:'masai'}) to find docuemnt which have both value



<!-- Update  -->
1. db.collection.updateOne()
    - db.users.updateOne({org:"masai"}, {$set : {city: "bangalore" }}) // first value is which i want to find and second value is which value i want to update in found object
    - $set method
2. db.collection.updateMany()


<!--  Finding using comparison operator -->
lt  - less than
gt - greater than
lte - less than and equal to
gte - greater than and equal to
ne - not equal to
eq - equal to 

1. db.user.find({followers : {$lte: 1000}})
 


<!-- Logical Operator And/ Or -->
**AND**
1. db.collection.find({}, {org:"masai", country: 'India' })
2. db.collection.find({$and : [{org:"masai", country: 'India' }]})
3. db.collection.find({$or : [{org:"masai", country: 'India' }]})


<!-- Comparsion and logical -->
1. db.collection.find({$and : [{health : {$gt:40}},{age : {$lt:60}}]})



1. .limit(n) - limit the document to n
2. .skip(n) - skip/ ignore the n document
3. .sort({follower:1}  ) - arrange the document according to the sort value -1 : desc / 1 : asc
4. .sort({country:1 , org: -1}) - sort by country and organization





---

# MONGOOSE
1. Connect MongoDB to our server



- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
  
- It provides a higher-level abstraction over the MongoDB Node.js driver, simplifying the interaction with MongoDB databases in a Node.js environment. 
  
- Mongoose helps developers define data models, manage relationships, and perform CRUD (Create, Read, Update, Delete) operations on MongoDB databases in a more structured and convenient way.


## Why Mongoose
1. Object Data Modeling (ODM):
  - Mongoose allows developers to define data models using a schema-based approach. 
  - Schemas provide a structure for documents in a MongoDB collection, including the data types of fields, validation rules, and default values.

2. Connection Management  
   - using mongoose.connect()

3. CRUD Operations
   - Mongoose provides methods for performing CRUD operations on MongoDB collections. These methods include create, find, findOne, update, and remove. These methods are used with Mongoose models.
  
4. Middleware
   - Mongoose supports middleware functions that can be executed before or after certain operations, such as saving or removing a document. Middleware allows developers to perform custom actions at various points in the lifecycle of a document.
  
5. Validation in schema
   - mongoose allows developer to define validation rules for fields in a schema
  
  

## What is Schema?
- In Mongoose, a schema is a blueprint or definition that defines the structure of documents within a MongoDB collection. 
  
- It provides a way to specify the fields, data types, validation rules, and other properties for documents stored in a collection. 
  
- Schemas in Mongoose are defined using the mongoose.Schema class.


# What is Model? 
- In Mongoose, a model is a constructor function that provides an interface for interacting with a MongoDB collection. Models are created based on Mongoose schemas, and they represent a specific collection in the database.
  
-  Once a model is defined, it can be used to perform various operations such as creating, reading, updating, and deleting documents in the associated MongoDB collection.