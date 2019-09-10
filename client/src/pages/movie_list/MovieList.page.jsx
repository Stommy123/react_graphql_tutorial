import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { FetchMovies } from '../../graphql/queries';
import { SectionWrapper } from '../../components';
 

const MovieList = _ => {
  const [movies, setMovies] = useState([])
  const { data = {}, loading } = useQuery(FetchMovies, { fetchPolicy: 'network-only' })
  useEffect(_ => {
    !loading && setMovies(data.movies || [])
  }, [data.movies, loading])
  return (
    <SectionWrapper>
      {movies.map(({ _id, title, rate }) => (
        <div>
          <Link to={`/movie/${_id}`}> 
            {title} - {rate}
          </Link>
        </div>
      ))}
    </SectionWrapper>
  )
}

export default MovieList;