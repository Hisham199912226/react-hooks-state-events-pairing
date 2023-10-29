import React from 'react'

function SortComments({sortChoice, onSortChoiceChange}) {
  return (
    <label htmlFor='sort'>
        Sort:
        <select className='sort-comments-select' name='sort' value={sortChoice} onChange={onSortChoiceChange}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
    </label>

  )
}

export default SortComments