import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import LibraryInput from './components/LibraryInput';
import LibrabryTable from './components/LibrabryTable';
import { Library } from './models/library';

export default function App() {
  
  const [libraries, setLibraries] = useState([]);

  function libraryCreated(library) {
    //console.log('libraryCreated',library);
    const newLibrary = [];
    for(let l of libraries) { newLibrary.push(l)}
    newLibrary.push(library);

    setLibraries(newLibrary);
  }

  function libraryRemove(libraryId) {
    setLibraries(libraries.filter((book) => book.id != libraryId));
  }

  return (
    <div className='container mt-4'> 
      <div className='card card-body'>
        <h1>Add Book: </h1>

        <LibraryInput libraryCreated= {libraryCreated}></LibraryInput>
        <LibrabryTable libraries={libraries} libraryRemove={libraryRemove}></LibrabryTable>
      </div>  
      
    </div>
  )
}
