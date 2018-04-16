//Book object constructor
var Book = function(args) {
  this.title = args.title;
  this.author = args.author;
  this.numberOfPages = args.numPages;
  this.publishDate = new Date(args.pubDate);
};

//Library constructor
var Library = function(instanceKey) {
  this.myBooksArray = [];
  this.keyInstance = instanceKey;
};

//Library Instance:
var gLib = new Library("localLibraryStorage");


Library.prototype.addBook = function(book) {
  if (book.constructor === Array) {
    return false;
  }
  for (var i = 0; i < this.myBooksArray.length; i++) {
    var currentBook = this.myBooksArray[i];
    if (currentBook.title === book.title) {
      return false;
    }
  }
  this.myBooksArray.push(book)
  return true;
};

Library.prototype.removeBookByTitle = function(title) {
  for (var i = 0; i < this.myBooksArray.length; i++) {
    if (this.myBooksArray[i].title === title) {
      this.myBooksArray.splice(i, 1);
      return true;
    }
  }
  return false;
};

Library.prototype.removeBooksByAuthor = function(authorName) {
  var result = false;
  for (var i = this.myBooksArray.length - 1; i >= 0; i--) {
    if (this.myBooksArray[i].author === authorName) {
      this.myBooksArray.splice(i, 1);
    }
  }
  return true;
};

Library.prototype.getRandomBook = function() {
  if (this.myBooksArray.length == 0) {
    return null;
  } else {
    return this.myBooksArray[(Math.floor(Math.random() * this.myBooksArray.length))];
  }
};

Library.prototype.getBookByTitle = function(title) {
  var tempArray = [];
  var pattern = new RegExp(title, "i");
  for (var i = 0; i < this.myBooksArray.length; i++) {
    if (pattern.test(this.myBooksArray[i].title)) {
      tempArray.push(this.myBooksArray[i]);
    }
  }
  return tempArray;
};

Library.prototype.getBooksByAuthor = function(authorName) {
  var tempArray = [];
  var pattern = new RegExp(authorName, "i");
  for (var i = 0; i < this.myBooksArray.length; i++) {
    if (pattern.test(this.myBooksArray[i].author)) {
      tempArray.push(this.myBooksArray[i]);
    }
  }
  return tempArray;
};

Library.prototype.addBooks = function(books) {
  if (!books.constructor === Array) {
    return null;
  }
  var count = 0;
  for (var i = 0; i < books.length; i++) {
    if (this.addBook(books[i])) {
      count++;
    }
  }
  return count;
};

Library.prototype.getAuthors = function() {
  var tempArray = [];
  for (var i = 0; i < this.myBooksArray.length; i++) {
    if (tempArray.indexOf(this.myBooksArray[i].author) === -1) {
      tempArray.push(this.myBooksArray[i].author);
    }
  }
  return tempArray;
};

Library.prototype.getRandomAuthorName = function() {
  if (this.myBooksArray.length == 0) {
    return [];
  } else {
    return this.myBooksArray[(Math.floor(Math.random() * this.myBooksArray.length))].author;
  }
};

Library.prototype.search = function(string) {
  var searchResults = [];
    searchResults.push(this.getBookByTitle(string));
    searchResults.push(this.getBooksByAuthor(string));
    return searchResults;
};

Library.prototype.setObject = function(instanceKey) {
  localStorage.setItem(instanceKey, JSON.stringify(this.myBooksArray));
  return instanceKey + " is set!";
};

Library.prototype.getObject = function(instanceKey) {
  var results = [];
  for (var i = 0; i < this.myBooksArray.length; i++) {
    results.push(new Book(JSON.parse(localStorage.getItem(instanceKey))));
  }
  return results;
};

//Book Instances
var gIT = new Book({
  title: "IT",
  author: "Stephen King",
  numPages: 1138,
  pubDate: "September 15, 1986 03:24:00"
});
var gIT2 = new Book({
  title: "IT",
  author: "Stephen King",
  numPages: 800,
  pubDate: "December 17, 1995 03:24:00"
});
var gCatcherInTheRye = new Book({
  title: "The Catcher in the Rye",
  author: "JD Salinger",
  numPages: 214,
  pubDate: "July 16, 1951 10:24:00"
});
var gWrinkleInTime = new Book({
  title: "A Wrinkle in Time",
  author: "Madeleine L'Engle",
  numPages: 180,
  pubDate: "January 1, 1962 08:00:00"
});
var gMistsOfAvalon = new Book({
  title: "Mists of Avalon",
  author: "Marion Zimmer Bradley",
  numPages: 876,
  pubDate: "January 1, 1985 08:00:00"
});
var gTheyAllSawACat = new Book({
  title: "They All Saw a Cat",
  author: "Brendan Wenzel",
  numPages: 44,
  pubDate: "August 30, 2016 08:00:00"
});
var gTheBigRedBarn = new Book({
  title: "The Big Red Barn",
  author: "Margaret Wise Brown",
  numPages: 32,
  pubDate: "January 6, 1995 08:00:00"
});
var gInterpreterOfMaladies = new Book({
  title: "Interpreter of Maladies",
  author: "Jhumpa Lahiri",
  numPages: 198,
  pubDate: "January 11, 2013 08:00:00"
});
var gUnaccustomedEarth = new Book({
  title: "Unaccustomed Earth",
  author: "Jhumpa Lahiri",
  numPages: 331,
  pubDate: "April 13, 2008 08:00:00"
});
var gTommyknockers = new Book({
  title: "Tommyknockers",
  author: "Stephen King",
  numPages: 900,
  pubDate: "October 10, 1964 08:00:00"
});
var gStephanie = new Book({
  title: "Stephanie",
  author: "Mayim Balik",
  numPages: 150,
  pubDate: "May 17, 2014 08:00:00"
});
var gTheVelveteenRabbit = new Book({
  title: "The Velveteen Rabbit",
  author: "Margery Williams",
  numPages: 50,
  pubDate: "May 16, 1922 08:00:00"
});
var gTheMayanPrincess = new Book({
  title: "The Mayan Princess",
  author: "Yesmina Itzel",
  numPages: 215,
  pubDate: "April 24, 1968 08:00:00"
});

//AllBookInstances
var gAllBooks = [gIT,
gIT2,
gCatcherInTheRye,
gWrinkleInTime,
gMistsOfAvalon,
gTheyAllSawACat,
gTheBigRedBarn,
gInterpreterOfMaladies,
gUnaccustomedEarth,
gTommyknockers,
gStephanie,
gTheVelveteenRabbit,
gTheMayanPrincess];
