import React from 'react'

export default function LibrabryTable(props) {
  
  function bookToRemove(book) {
      props.libraryRemove(book);

  }

  return (
    <div>
        <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                  props.libraries.map((book) =>
                  <tr key={book.id}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.isbn}</td>
                      <td>
                      <button onClick={(e) => bookToRemove(book.id) } type="button" class="btn-close" aria-label="Close"></button>
                      </td>
                  </tr>
                  )
              }
            </tbody>
        </table>
    </div>
  )
}
