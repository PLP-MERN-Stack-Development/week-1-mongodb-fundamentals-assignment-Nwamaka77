// Task 2: Basic CRUD Operations

// 2A. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// 2B. Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $gt: 2000 } });

// 2C. Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// 2E. Update the price of a specific book (e.g., "1984")
db.books.updateOne({ title: "1984" }, { $set: { price: 12.99 } });

// 2F. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });


// Task 3: Advanced Queries

// 3A. Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 3B. Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 3C. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 3D. Sort books by price descending
db.books.find().sort({ price: -1 });

// 13E. Pagination: Page 1 (first 5 books)
db.books.find().skip(0).limit(5);

// 3F. Pagination: Page 2 (next 5 books)
db.books.find().skip(5).limit(5);


// Task 4: Aggregation Pipeline

// 4A. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// 4B. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 4C. Group books by publication decade
db.books.aggregate([
  {
    $project: {
      decade: { $concat: [{ $substr: ["$published_year", 0, 3] }, "0s"] }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


// Task 5A: Create index on title
db.books.createIndex({ title: 1 });

// Task 5B: Create compound index
db.books.createIndex({ author: 1, published_year: 1 });

// Task 5C: Performance comparison
// Without index
db.books.find({ author: "J.R.R. Tolkien" }).explain("executionStats");

// With compound index
db.books.find({
  author: "J.R.R. Tolkien",
  published_year: { $gt: 1940 }
}).explain("executionStats");

