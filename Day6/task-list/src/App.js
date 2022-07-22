import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import LibraryInput from './components/LibraryInput';
import LibrabryTable from './components/LibrabryTable';

export default function App() {
  return (
    <div className='container mt-4'> 
      <div className='card card-body'>
        <h1>Add Book: </h1>

        <LibraryInput></LibraryInput>
        <LibrabryTable></LibrabryTable>
      </div>  
      
    </div>
  )
}

