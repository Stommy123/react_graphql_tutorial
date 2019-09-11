import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { FetchMovies } from '../../graphql/queries';
import { SectionWrapper, List, Filters, EmptyContent } from '../../components';
import { filterTypes } from './MovieList.schema';
import { constCase } from '../../utilities';

const MovieList = _ => {
  const [movies, setMovies] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [filtersToApply, setFiltersToApply] = useState({});
  const { data = {}, loading } = useQuery(FetchMovies, {
    variables: { where: { ...activeFilters } },
    fetchPolicy: 'network-only'
  });
  const handleFilterChange = ({ id, value }) => setFiltersToApply({ ...filtersToApply, [id]: value });
  const applyFilters = _ => {
    const parsedGenres = filtersToApply.genre && filtersToApply.genre.map(({ value }) => constCase(value));
    setActiveFilters({ ...filtersToApply, ...(parsedGenres && { genre: parsedGenres }) });
  };
  const clearFilter = _ => {
    setActiveFilters({});
    setFiltersToApply({});
  };
  console.log('active filters', activeFilters);
  useEffect(
    _ => {
      !loading && setMovies(data.movies || []);
    },
    [data.movies, loading]
  );
  return (
    <SectionWrapper>
      <Filters
        filterType={filterTypes}
        filtersToApply={filtersToApply}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
        clearFilter={clearFilter}
      />
      {movies.length ? (
        <List movies={movies} />
      ) : (
        <EmptyContent text="There are no movies to show" subText=" please adjust your filter or create a new one!" />
      )}
    </SectionWrapper>
  );
};

export default MovieList;
