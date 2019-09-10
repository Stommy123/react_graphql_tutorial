import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';
import { SectionWrapper, MovieDetails, Search } from '../../components';

const SearchMovie = ({ client }) => {
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [inputValue, setInputValue] = useState(String())
  const handleChange = ({ data }) => setFeaturedMovie(data);
  const handleInputChange = input => {
    setInputValue(input)
    return input;
  }
  const loadOptions = async title => {
    const { data: { movies = [] } = {} } = await client.query({
      query: FetchMovies,
      variables: {
        where: { title }
      }
    })
    return movies.map((movie = {}) => ({ label: movie.title, value: movie._id, data: movie }))
  }
  return (
    <SectionWrapper>
      <Search
        handleChange={handleChange}
        handleInputChange={handleInputChange}
        loadOptions={loadOptions}
        inputValue={inputValue}
      />
      {featuredMovie && <MovieDetails {...featuredMovie} />}
    </SectionWrapper>
  )
}

export default withApollo(SearchMovie)