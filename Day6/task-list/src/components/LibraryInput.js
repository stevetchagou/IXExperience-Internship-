import React from 'react'

export default function LibraryInput() {
  return (
    <div> 
        <div className='mt-4'>
            <b>Title</b>
            <div className='input-group mb-3'>
                <input type="text"className='form-control'/>
            </div>
        </div>

        <div>
            <b>Author</b>
            <div className='input-group mb-3'>
                <input type="text"className='form-control'/>
            </div>
        </div>

        <div>
            <b>ISBN#</b>
            <div className='input-group mb-3'>
                <input type="text"className='form-control'/>
            </div>
        </div>

        <div class="d-grid gap-2">
            <button className='btn btn-outline-secondary mb-5' type="button">Button</button>
        </div>
    </div>

    
  )
}
