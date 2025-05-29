[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19661426&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals, including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## 📦 Project Structure

- `insert_books.js` — Populates the `plp_bookstore` database with sample book data.
- `queries.js` — Contains all MongoDB queries for CRUD operations, advanced filtering, aggregation, and indexing.
- `README.md` — Updated Setup and usage instructions.
- Screenshot (Compass) — Shows the data loaded into the `books` collection.

---

## 🛠️ Requirements

- Node.js (v14 or higher)
- MongoDB (Local or Atlas cluster)
- MongoDB Compass or MongoDB Shell (`mongosh`)

---

## 🚀 Setup Instructions

### Option 1: Local MongoDB

1. Install MongoDB from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Start your MongoDB server:
   ```bash
   mongod


Clone this repository and navigate to the folder:

bash
git clone <your-repo-url>
cd week-1-mongodb-fundamentals-assignment-Nwamaka77

Install the MongoDB driver:

bash
npm install mongodb
Run the script to insert data:

bash
node insert_books.js


## What the Script Does
Connects to MongoDB

Drops the book collection if it exists

Inserts 12 book documents into the plp_bookstore.books collection

Logs the inserted books to the console

## 📌 Queries Implemented (queries.js)
Basic CRUD: Find, insert, update, and delete books

Filtering: By author, genre, published year, and stock

Projections: Display specific fields only

Sorting: By price (asc/desc)

Pagination: Using skip() and limit()

Aggregation Pipelines:

Average price per genre

Author with the most books

Books grouped by publication decade

Indexing: Title and compound (author + published_year) indexes

explain to analyze performance

## 📸 Screenshot
Include a screenshot of your MongoDB Compass showing the books collection and a few inserted documents.

## ✅ How to Run Queries
Open MongoDB Compass or connect via mongosh.

Copy and paste commands from queries.js to test the database.

## Note: 

I committed more than the  required files. I tried deleting them, but could not



## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 
