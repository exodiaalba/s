import React from 'react'
import MovieCard from './MovieCard';

function MovieList({movieList}) {
    return (
        <div>
           <div className="mo">
              {
                  movieList.map((el,key) => <MovieCard key={el.id} movie={el}/>)
              }
           </div>
           
        </div>
    )
}

export default MovieList
