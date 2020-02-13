import React, { useState, useMemo } from 'react';
import { useQuery } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';
import { SectionWrapper, List, Filters, Loader } from '../../components';
import { filterTypes } from './MovieList.schema';

const MovieList = _ => {
  const [activeFilters, setActiveFilters] = useState({});

  const { data = {}, loading } = useQuery(FetchMovies, {
    variables: { where: { ...activeFilters } },
    fetchPolicy: 'network-only'
  });

  const movies = useMemo(_ => data.movies || [], [data])

  const applyFilters = ({ genre, ...filtersToApply }) => {
    const parsedGenres = genre && genre.map(({ value }) => value);
    setActiveFilters({ ...filtersToApply, ...(parsedGenres && { genre: parsedGenres }) });
  };

  const clearFilter = _ => setActiveFilters({});
  
  return (
    <SectionWrapper>
      <Filters filterType={filterTypes} onApplyFilters={applyFilters} onClearFilters={clearFilter} />
      {loading ? <Loader /> : <List movies={movies} />}
    </SectionWrapper>
  );
};

export default MovieList;
