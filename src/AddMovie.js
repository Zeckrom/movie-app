import React from 'react'

var title = ''
var link = ''
var year = -1
var rating = -1


function  isFormValid(title, link, year, rating){
  return (
    (title.length > 0) &&
    (link.length > 0) &&
    year > -1 &&
    rating > -1 &&
    rating < 6
  )
}

function clickHandler(title, link, year, rating){
    return (
      {title: title, link: link, year: Number(year), stars: Number(rating)}
    )
  }


const AddMovie = (props) => {

  return (
    <li className='movie-container'>
      <ul action="#" className='add-form'>
        <li className='add-form-item'>
          <input
            onChange={e=>title = e.target.value}
            type="text"
            placeholder="title" />
        </li>
        <li className='add-form-item'>
          <input
            onChange={e=>link = e.target.value}
            type="text"
            placeholder="link to the image" />
        </li>
        <li className='add-form-item'>
          <input
            onChange={e=>year = e.target.value}
            type="number"
            placeholder="year" />
        </li>
        <li className='add-form-item'>
          <input
            onChange={e=>rating = e.target.value}
            type="number"
            placeholder="rating from 0 to 5" />
        </li>
        <li className='add-form-item'>
          <input
            onClick={()=>{
              isFormValid(title, link, year, rating)&&
              props.add(clickHandler(title, link, year, rating))
            }}
            type="button"
            value='Add movie'/>
        </li>
      </ul>
    </li>
  )
}


export default AddMovie
