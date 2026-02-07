# MongoDB VS Code Playground Demo

Prerequisites:

- Install the **MongoDB for VS Code** extension.
- Have a working MongoDB connection (Atlas or self-hosted).

Quick steps:

1. Open [playground-1.mongodb.js](playground-1.mongodb.js).
2. Use the playground connection picker (top-right of the editor) to select or create a connection.
3. Click the play/run button to execute the playground. The output panels show returned values and command results.

Notes:

- The playground runs in a mongosh-like environment and exposes globals such as `use`, `db`, and collection helpers.
- The script performs: create database/collection, insertOne/insertMany, find, updateOne, deleteOne.
- You can change the DB name from `demo_playground_db` to any preferred name.

