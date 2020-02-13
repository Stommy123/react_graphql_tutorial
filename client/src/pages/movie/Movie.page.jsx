import React from 'react';
import { Query } from 'react-apollo';
import { FetchMovie } from '../../graphql/queries';
import { SectionWrapper, MovieDetails, Loader } from '../../components';

const Movie = ({ match }) => (
  <SectionWrapper>
    <h3 className="detail-header">Featured Movie</h3>
    <Query query={FetchMovie} variables={{ _id: match.params.movieId }}>
      {({ data = {}, loading }) => (loading ? <Loader /> : <MovieDetails {...data.movie} />)}
    </Query>
  </SectionWrapper>
);

export default Movie;
