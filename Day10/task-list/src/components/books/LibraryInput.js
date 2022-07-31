import React, {useState} from 'react'
import { Library } from '../../models/library';

export default function LibraryInput(props) {
  const [titleName, setTitleName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isbnNumber, setIsbnNumber] = useState('');

  function onButtonPushed(event) {
      event.preventDefault();
      /*console.log(titleName);
      console.log(authorName);
      console.log(isbnNumber);*/

      const library = new Library(null, titleName, authorName, isbnNumber);
      //console.log(library);
      props.libraryCreated(library);

      setTitleName('');
      setAuthorName('');
      setIsbnNumber('');

  }

  return (
    <div className='library-form'>
        <form onSubmit={onButtonPushed}>
            <div className='mt-4'>
                <b>Title</b>
                <div className='input-group mb-3'>
                    <input
                        value = {titleName}
                        onChange={(event) => setTitleName(event.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>
            </div>

            <div>
                <b>Author</b>
                <div className='input-group mb-3'>
                    <input 
                        value = {authorName}
                        onChange={(event) => setAuthorName(event.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
            </div>

            <div>
                <b>ISBN#</b>
                <div className='input-group mb-3'>
                    <input
                        value = {isbnNumber}
                        onChange={(event) => setIsbnNumber(event.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>
            </div>

            <div className="d-grid gap-2">
                <button className='btn btn-outline-secondary mb-5' type="submit">Button</button>
            </div>
        </form>
    </div>

    
  )
}
