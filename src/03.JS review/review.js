const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

title;
author;
genres;

//...otherGenres - REST operator (mindig az = jel baloldalán van és a maradékot jelenti)
//destruktúrálással kiszedem az első és a második filmtípust, majd az otherGenres operátorral egy másik tömbe belerakom a maradék filmtípusokat
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
primaryGenre;
secondaryGenre;
otherGenres;

//SPREAD operator (mindig a = jel jobb oldalán van és a tömb összes elemét jelenti)
//a filmtípusokhoz hozzáadtam a az epic fantasy-t
const newGenres = [...genres, "epic fantasy"];

//az eredeti tömböt iratom ki
genres;

//az új tömböt íratom ki a hozzáadott elemmel
newGenres;

const updatedBook = {
  ...book,

  // Adding a new property to the book
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property in the book
  pages: 1210,
};

//eredeti book objektum
book;

//update-elt book, hozzáadva az új property és módosítva a pages property
updatedBook;

//Template Literals
publicationDate;

const getYear = (str) => str.split("-")[0]; //str.slice(0,4);
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//Ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//Logical operator
//ha a kifejezés első tagja true, akkor kiírja v megjeleníti a 2. tagot
console.log(true && "Some string");

//ha false, akkor nem csinál semmit
console.log(false && "Some string");

//itt a hasMovieAdaptation false, ezért nem írja ki a This book has a movie szöveget
console.log(hasMovieAdaptation && "This book has a movie");

// false értékek: 0, '', null, undefined
console.log("jonas" && "Some string");

//mivel a 0 falsy value így nem íródik ki a második érték, az elsőt adja vissza
console.log(0 && "Some string");

//ha true az első akkor nem veszi figyelembe a másodikat
console.log(true || "Some string");

//ha az első false, akkor a másodikat adja vissza
console.log(false || "Some string");

console.log(book.translations.spanish);

//mivel az első érték false(nincs spanyol fordítás), így a második érték kerül kiértékelésre
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);

//movel a reviewsCount 0, így a no data szöveget akarjuk kiíratni ehelyett
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

//?? nullish coalescing operator, akkor tér vissza a 2.értékkel amikor az első érték null vagy undefined
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

//Optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;

  //ha reviewsCount nincs a book.reviews?.librarything-ban akkor megadjuk ??-el, hogy 0-a legyen az érték és így nem NaN-al tér vissza
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

//map, filter, reduce methods

const books = getBooks();
books;

//map method
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

//bejárja a tömböt és kiírja az összes objektumban lévő címeket
const titles = books.map((book) => book.title);
titles;

//mindenegyes book objektum title, author és reviewsCount értékeit adja vissza egy tömb objektumaiként
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//filter method

//csak azokat a könyveket adja vissza egy tömb objektumaiként, ahol az oldalszám nagyobb mint 500 és ezeknek a könyveknek a hasMovieAdaptation  true
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

//kiválasztja azokat a filmeket, amelyek típusa adventure, és ezt a visszadott tömböt bejárja map-el, hogy kiírassa ezek címeit
const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//reduce method

//összeadja a tömb értékeit
const numbers = [1, 2, 3, 4];
const summ = numbers.reduce((accumulator, item) => accumulator + item, 0);
summ;

//összeadva az egyes könyvek oldalszámait
const pagesAllBooks = books.reduce((sum, item) => sum + item.pages, 0);
pagesAllBooks;

//sort method

const arr = [3, 7, 1, 9, 6];
//slice metódussal egy másolatot készítünk az eredeti tömbből és azt rendezzük. Slice nélkül az eredeti tömb is módosul, rendezésre kerül
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

//oldalszám szerint növekvőbe rakja a könyveket
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//ADD, DELETE,UPDATE egy tömbben lévő objektumoknál

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

//első érték az eredti tömb amibe hozzá akarjuk adni a tömböt, és a második érték a hozzáadandó objektum
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
// 6.objektum törlése.Ha a megadott id értéke nem egyenlő a megadott(törölni kívánt) elemmel, akkor azokat betrakja egy új tömbbe. Így a megadott számú objektum nem kerül bele az új tömbbe.
//a megadott id értéket általában a függvény paramétere
const booksAfterDelete = booksAfterAdd.filter((item) => item.id !== 6);
booksAfterDelete;

// 3) Update book object in the array
// a feltételbe megadjuk, hogy melyik id-jú könyvet szeretnénk módosítani. Az igaz ágba berakjuk a módosítást, úgy, hogy az első érték az adott iterációban lévő objektumelem, majd a 2. érték az obejektumelem  módosítása. A hamis ágba pedig visszaadjuk a többi iterációban lévő objektumelemeket, amelyeket nemakarunk módosítani
const booksAfterUpdate = booksAfterDelete.map((item) =>
  item.id === 1 ? { ...item, pages: 1210 } : item
);
booksAfterUpdate;

//Promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

//Async, await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
todos;
