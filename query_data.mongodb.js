// 1.2 Create/Use a database for our session
// use university_db // mongosh

use("university_db");

// 2.3 Show our collections
// show collections; // mongosh
db.getCollectionNames();

// ==================== PART 3: BASIC READ OPERATIONS ====================

// 3.1 Find all documents in a collection
db.students.find();

// 3.2 Find with pretty formatting (for readability)
db.students.find().pretty();

// 3.3 Find one document
db.students.findOne();

// 3.4 Count documents
db.students.countDocuments();
