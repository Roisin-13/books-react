import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const books = [
  {
    id: 1,
    title: "Stardust",
    author: "Neil Gaiman",
    image: "https://images-eu.ssl-images-amazon.com/images/I/91Pa-A6E0JL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg"
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    image: "https://images-eu.ssl-images-amazon.com/images/I/71MBvBhzu3L._AC_UL200_SR200,200_.jpg"
  },
  {
    id: 3,
    title: "The Haunting Season",
    author: "Bridget Collins",
    image: "https://images-eu.ssl-images-amazon.com/images/I/51wgsV4%2BURL._AC_UL200_SR200,200_.jpg"

  }
];


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        {/* return (
          <Book key={book.id} book={book}></Book>
        ); */}
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  //const { image, title, author } = props.book;
  const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

// const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/91Pa-A6E0JL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg" alt="" />

// const Title = () => <h1>Stardust</h1>

// const Author = () => <h4 style={{ color: "#617d98", fontSize: "0.75 rem", marginTop: "0.75 rem" }}>Neil Gaiman</h4>

//---render method
ReactDOM.render(
  <BookList />,
  document.getElementById('root')
);


