import React from 'react'
import Movie from './Movie'
import AddMovie from './AddMovie'




const MovieList = props =>{
return (
  <ul className='movies-container'>
  { props.list.map((el) =>{
    return (props.display(el, props.search) && <Movie movie={el} />)
    })
  }
  <AddMovie add={props.add} />
  </ul>
)
}

export default MovieList
