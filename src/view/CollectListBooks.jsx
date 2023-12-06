import React, { useEffect } from 'react';
import { useBookControllerContext } from '../controller/BooksController';

export default function CollectListBooks() {
  const { state, dispatch } = useBookControllerContext();

  useEffect(() => {
    dispatch({ type: "LISTBOOKS" });
    //console.log('STATE:: on collectlistbooks', state)
  }, []);

  return (
    <>
      <div> i am on collect list books</div>
    </>

    // <div style={{ margin: "1em" }}>
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">id</th>
    //         <th scope="col">Title</th>
    //         <th scope="col">Author</th>
    //         <th scope="col">Read</th>
    //       </tr>
    //     </thead>
    //     <tbody>

    //       {/* {state && state.books.length > 0 ? (
    //         state.books.map((book) => (
    //           <tr key={book.id}>
    //             <th scope="row">{book.id}</th>
    //             <td>{book.title}</td>
    //             <td>{book.author}</td>
    //             <td>{book.read ? 'Yes' : 'No'}</td>
    //           </tr>
    //         ))
    //       ) : (
    //         <tr>
    //           <td colSpan="4">Loading...</td>
    //         </tr>
    //       )} */}
    //     </tbody>
    //   </table>
    // </div>
  );
}
