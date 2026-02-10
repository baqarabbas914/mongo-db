// 1.2 Create/Use a database for our session
// use university_db // mongosh

use("university_db");

// ==================== PART 4: FILTERING DATA ====================

// 4.1 Find by exact match
db.students.find({ major: "Computer Science" });

// 4.2 Find by multiple conditions (AND implicitly)
db.students.find({
  major: "Computer Science",
  is_active: true,
});

// 4.3 Find by ID
db.students.find({ _id: 1 });

// 4.4 Find by nested field
db.students.find({ "address.city": "New York" });
