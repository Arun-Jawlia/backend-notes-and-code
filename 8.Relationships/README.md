# Relationships
- It's a way two or more things are connected together (collections are in our case is database)

- In the context of backend development, relationships refer to the associations or connections between entities in a data model. 
- These entities could represent tables in a relational database, documents in a NoSQL database, or objects in an object-oriented programming paradigm. 
- Establishing relationships is crucial for modeling the way data is related and interconnected in a system

## 3 Kinds of Relationships
1. 1-1 (one to one relationship)
2. 1-many ( one to many relationship)
3. many-1 (many to one relationship)
4. many-many ( many to many relationship)


## One to One Relationship
- In a one-to-one relationship, each entity in one set is associated with exactly one entity in another set, and vice versa.
- Example: Each person has one passport, and each passport belongs to one person.



## One to Many Relationships (1:N)
- In a one-to-many relationship, each entity in one set can be associated with multiple entities in another set, but each entity in the second set is associated with only one entity in the first set.
- Example: A single author can write multiple books, but each book is written by one author.


## Many to One Relationship (N:1)
- This is the inverse of a one-to-many relationship. Many entities in one set can be associated with a single entity in another set.
- Example: Multiple students may belong to a single classroom, but each student is associated with only one classroom.


## Many to Many Relationships (N:N)
- In a many-to-many relationship, entities in one set can be associated with multiple entities in another set, and vice versa.
- Example: Students can enroll in multiple courses, and each course can have multiple enrolled students.