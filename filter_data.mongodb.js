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


// ==================== PART 5: COMPARISON OPERATORS ====================
// $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin

// 5.1 Greater than
db.students.find({ age: { $gt: 21 } })

// 5.2 Less than or equal to
db.students.find({ gpa: { $lte: 3.5 } })

// 5.3 Not equal to
db.students.find({ major: { $ne: "Computer Science" } })

// 5.4 In array (multiple values)
db.students.find({ major: { $in: ["Computer Science", "Mathematics"] } })

// 5.5 Not in array
db.students.find({ major: { $nin: ["Physics", "Chemistry"] } })

// ==================== PART 6: LOGICAL OPERATORS ====================
// $and, $or, $not, $nor

// 6.1 OR operator
db.students.find({
  $or: [
    { gpa: { $gt: 3.8 } },
    { age: { $lt: 20 } }
  ]
})

// 6.2 AND operator (explicit)
db.students.find({
  $and: [
    { major: "Computer Science" },
    { gpa: { $gte: 3.5 } },
    { is_active: true }
  ]
})

// 6.3 Complex query with AND and OR
db.students.find({
  $and: [
    { is_active: true },
    { $or: [
      { major: "Computer Science" },
      { age: { $lt: 21 } }
    ]}
  ]
})
