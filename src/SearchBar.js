import React from 'react'

const SearchBar=(props)=>
 <div  className="searchbar-container">
   <input
    onChange={e=>{
      props.onChangeSearch(e.target.value)
    }}
    className="search-input"
    type="text" />
   <input className="search-button" type="button" value="search"/>
 </div>


export default SearchBar
