import React from 'react'

function ratingToStars(nbr){
  let result=""

  for (let i = 0;i < nbr; i++){
    result += "★"
  }
  while (result.length < 5){
    result+= "☆"
  }
  return result
}

const Movie = props => {
  return (
  <li className='movie-container'>
    <div className="movie">
      <div className="stars">{ratingToStars(props.movie.stars)}</div>
      <div className='image-container'>
        <img className="movie-image" src={props.movie.link} alt="" />
      </div>
      <div className="info">
        <div className="name">{props.movie.title}</div>
        <div className="year">{props.movie.year}</div>
      </div>
  </div>
</li>
)
}


export default Movie
