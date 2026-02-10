// ============================================
// MONGODB DEMO SESSION - COMPLETE GUIDE
// ============================================
// Save this as: mongodb_demo.mongodb.js
// Run each section by selecting and clicking "Run Selected"

// ==================== PART 1: SETUP ====================

// 1.1 Show available databases
// show dbs; mongosh

db.getMongo().getDBs();

// 1.2 Create/Use a database for our session
// use university_db // mongosh

use("university_db");

// 1.3 Show current database
// db; mongosh
db.getName();

// ==================== PART 2: CREATING COLLECTIONS ====================

// 2.1 Insert students (creates collection automatically)
db.students.insertMany([
  {
    _id: 1,
    name: "Alice Johnson",
    age: 20,
    email: "alice@university.edu",
    major: "Computer Science",
    gpa: 3.8,
    courses: ["CS101", "MATH201", "ENG101"],
    address: {
      city: "New York",
      country: "USA",
    },
    enrollment_date: new Date("2023-09-01"),
    is_active: true,
  },
  {
    _id: 2,
    name: "Bob Smith",
    age: 22,
    email: "bob@university.edu",
    major: "Mathematics",
    gpa: 3.5,
    courses: ["MATH201", "PHYS101", "STAT301"],
    address: {
      city: "Boston",
      country: "USA",
    },
    enrollment_date: new Date("2022-09-01"),
    is_active: true,
  },
  {
    _id: 3,
    name: "Charlie Brown",
    age: 21,
    email: "charlie@university.edu",
    major: "Computer Science",
    gpa: 3.2,
    courses: ["CS101", "CS102", "MATH101"],
    address: {
      city: "Chicago",
      country: "USA",
    },
    enrollment_date: new Date("2023-01-15"),
    is_active: false,
  },
  {
    _id: 4,
    name: "Diana Prince",
    age: 19,
    email: "diana@university.edu",
    major: "Physics",
    gpa: 3.9,
    courses: ["PHYS101", "PHYS102", "MATH201"],
    address: {
      city: "Los Angeles",
      country: "USA",
    },
    enrollment_date: new Date("2023-09-01"),
    is_active: true,
  },
  {
    _id: 5,
    name: "Ethan Hunt",
    age: 23,
    email: "ethan@university.edu",
    major: "Computer Science",
    gpa: 3.1,
    courses: ["CS101", "CS201", "CS301", "MATH301"],
    address: {
      city: "Seattle",
      country: "USA",
    },
    enrollment_date: new Date("2021-09-01"),
    is_active: true,
  },
]);

// 2.2 Insert courses collection
db.courses.insertMany([
  {
    course_id: "CS101",
    course_name: "Introduction to Programming",
    credits: 3,
    instructor: "Dr. Smith",
    department: "Computer Science",
    enrolled_students: 45,
  },
  {
    course_id: "CS102",
    course_name: "Data Structures",
    credits: 4,
    instructor: "Dr. Johnson",
    department: "Computer Science",
    enrolled_students: 30,
  },
  {
    course_id: "MATH201",
    course_name: "Calculus II",
    credits: 4,
    instructor: "Dr. Williams",
    department: "Mathematics",
    enrolled_students: 50,
  },
  {
    course_id: "PHYS101",
    course_name: "Physics I",
    credits: 4,
    instructor: "Dr. Brown",
    department: "Physics",
    enrolled_students: 35,
  },
]);

// 2.3 Show our collections
// show collections; // mongosh
db.getCollectionNames();
