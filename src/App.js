import React, { Component } from 'react';
import './App.css';
import './index.css'
import './addMovie.css'
import MovieList from './MovieList'
import SearchBar from './SearchBar'




class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      inputSearch: "",
      movieList: [
        {title: "star wars",link: "http://www.lepoint.fr/images/2017/12/11/11729355lpw-11730000-article-jpg_4831922.jpg", year: 2015, stars: 2},
        {title: "Inception",link: "http://cariandcobb.com/wp-content/uploads/2017/06/1b5c10d82b892ba0f2c2e9b42d5df5fe-inception-1469000805.jpeg", year: 2015, stars: 5},
        {title: "Blade runner",link: "http://www.futurhebdo.fr/wp-content/uploads/2017/10/tumblr_static_26osk19e9qck84sgcwogsw88w.jpg", year: 2015, stars: 5},
        {title: "captain america: first avenger",link: "http://usbackline.com/wp-content/uploads/2017/07/360f877bec3918dadcee1d1f0250bbaa-captain-america-the-first-avenger-1467744997.jpg", year: 2015, stars: 4},
        {title: "captain america: the winter soldier",link: "https://i.ytimg.com/vi/7SlILk2WMTI/maxresdefault.jpg", year: 2015, stars: 3},
        {title: "captain america: civil war",link: "https://i1.wp.com/www.gamertestdomi.com/wp-content/uploads/2016/11/1461167932_captain-america-civil-war-film-streaming.jpg?fit=2950%2C1493&ssl=1", year: 2015, stars: 5}
      ]
    }
  }

  isToDisplay = (obj, name) =>{
    return obj.title.toUpperCase().indexOf(name.toUpperCase()) !== -1
  }

  setInputSearch = (input) => {
    this.setState({
      inputSearch: input
    })
  }
  addNewMovie = (obj) => {
    this.setState({
      movieList: this.state.movieList.concat(obj)
    })
  }


  render() {
    return (
    <div>
      <SearchBar
        onChangeSearch={this.setInputSearch}
         />
      <MovieList
        add={this.addNewMovie}
        list={this.state.movieList}
        display={this.isToDisplay}
        search={this.state.inputSearch}
        />
    </div>
    );
  }
}

export default App;
