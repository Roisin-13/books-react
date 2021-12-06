import React from 'react';

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


export default Book;