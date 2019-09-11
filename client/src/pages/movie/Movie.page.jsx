import React from 'react';
import { Query } from 'react-apollo';
import { FetchMovie } from '../../graphql/queries';
import { SectionWrapper, MovieDetails } from '../../components';

const Movie = ({ match = {} }) => (
  <SectionWrapper>
    <h3 className="detail-header">Featured Movie</h3>
    <Query query={FetchMovie} variables={{ _id: match.params.movieId }} fetchPolicy="network-only">
      {({ data = {} }) => <MovieDetails {...data.movie} />}
    </Query>
  </SectionWrapper>
);

export default Movie;
