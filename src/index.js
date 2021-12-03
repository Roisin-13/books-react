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

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hi :)");
  }

  const scaryClick = (author) => {
    console.log(author);
  }
  return (
    <article className="book" onMouseOver={() => {
      console.log(title)

    }}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Hi :)</button>
      <button type="button" onClick={() => scaryClick(author)}>Scary button</button>
    </article>
  );
}



//---render method
ReactDOM.render(
  <BookList />,
  document.getElementById('root')
);


