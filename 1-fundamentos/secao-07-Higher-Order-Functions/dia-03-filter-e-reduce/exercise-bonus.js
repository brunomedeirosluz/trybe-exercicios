// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
// const flatten = () => arrays
//   .reduce((acc, curr) => acc.concat(curr), []);

// console.log(flatten(arrays));
  
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
// 1

//   const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// const reduceNames = () => books.reduce((acc, curr, index) => index === books
// .length - 1  ? `${acc}${curr.author.name}.` 
// : `${acc}${curr.author.name}, `, '');
  
// console.log(reduceNames());
  

// 2

// const expectedResult = 43;

// const expectedResult = 43;

// const averageAge = () => {
// const totalBooks = books.length;
// const averageAuthors = books
// .reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0)
// return averageAuthors / totalBooks
// }

// console.log(averageAge());

// 3

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => books.reduce((acc, curr) => acc < curr
  .name.length ? curr : acc);
  

  console.log(longestNamedBook());
