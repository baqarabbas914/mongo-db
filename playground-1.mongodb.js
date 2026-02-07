/*
 MongoDB VS Code Playground demo

 Instructions:
 - Install the "MongoDB for VS Code" extension.
 - Open this file in VS Code and pick an active connection from the playground connection picker (top-right).
 - Run the playground (click the play button) to execute the script.

 This script uses the mongosh environment provided by the extension (globals: `use`, `db`, etc.).
*/
(async () => {
  try {
    // Switch to (or create) the demo database
    use("demo_playground_db");

    // Get (or create) collection
    const people = db.getCollection("people_demo");

    // Clean start for demo purposes
    await people.deleteMany({});

    // Create
    await people.insertOne({ name: "Alice", age: 30, createdAt: new Date() });
    await people.insertMany([
      { name: "Bob", age: 25 },
      { name: "Carol", age: 27 }
    ]);

    // Read
    const all = await people.find({}).toArray();
    console.log("All after insert:", all);

    // Update
    await people.updateOne({ name: "Alice" }, { $set: { age: 31 } });
    const alice = await people.findOne({ name: "Alice" });
    console.log("Alice after update:", alice);

    // Delete
    await people.deleteOne({ name: "Bob" });
    const afterDelete = await people.find({}).toArray();
    console.log("After delete:", afterDelete);

    return { all, alice, afterDelete };
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
