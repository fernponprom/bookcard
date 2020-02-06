import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
 
import BookCard from './components/BookCard';
import Form from './components/Form';
 
function App() {
 
 let [bookList, setBookList] = useState([
   {
     title: "Harry Potter",
     imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg"
   },
   {
     title: "Harry Potter2",
     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg'
   },
 ]);
 
 let handleClick = (data) => {
   setBookList([data, ...bookList])
 }
 
 let deleteBook = (index) => {
   const filtedBookList = bookList.filter((book, i) => {
     return i !== index;
   });
 
   setBookList(filtedBookList);
 }
 
 let updateBook = (index) => {
   console.log('test')
   const updated = bookList.map((book, i) => {
     if (index === i)
       return {
         title: "Harry Potter",
         imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg"
       }
     else
       return book;
   });
 
   setBookList(updated)
 }
 
 return (
   <div className="App">
     <div className='book-list'>
       {
         bookList.map((book, index) => {
           return <BookCard
             key={index} {...book}
             deleteBook={() => { deleteBook(index) }}
             updateBook={() => { updateBook(index) }}
           />
         })
       }
     </div>
     <Form onClick={handleClick} />
   </div>
 );
}
 
export default App;
