import React, {useEffect, useState} from 'react'

import LibraryInput from './LibraryInput';
import LibrabryTable from './LibrabryTable';
import { Library } from '../../models/library';
import LibraryService from '../../services/LibraryService';

export default function BooksPage() {
    useEffect(() => {
      fetchTasks();
    }, []);
    
    const [libraries, setLibraries] = useState([]);
        async function fetchTasks() {
      try {
        const books = await LibraryService.readLibrary();
        setLibraries(books);
      } catch(err) {
        console.log(err);
      }
    }
        async function libraryCreated(library) {
          try { 
        library = await LibraryService.createLibrary(library);
            //console.log('libraryCreated',library);
        const newLibrary = [];
        for(let l of libraries) { newLibrary.push(l);}
        newLibrary.push(library);
            setLibraries(newLibrary);
      } catch(err) {
        console.log(err);
      }
      
    }
        async function libraryRemove(libraryId) {
      try {
        await LibraryService.deleteLibrary(libraryId);
        setLibraries(libraries.filter((book) => book.id != libraryId));
              }catch(err) {
        console.log(err);
      }
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
