import React from 'react'

function SearchBar({commentsSearch, onCommentsSearchChange}) {
  return (
    <div className='search-bar'>
        <form>
            <label htmlFor='text'>
                Search: 
                <input 
                    type='text' 
                    name='text' 
                    value={commentsSearch} 
                    placeholder='search by username...'
                    onChange={onCommentsSearchChange}
                />
            </label>
        </form>
    </div>
  )
}

export default SearchBar