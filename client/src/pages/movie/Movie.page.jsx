import React from 'react';
import { Query } from 'react-apollo';
import { FetchMovie } from '../../graphql/queries';
import { SectionWrapper, MovieDetails } from '../../components';

const Movie = ({ match = {} }) => (
  <SectionWrapper>
    <Query query={FetchMovie} variables={{ _id: match.params.movieId }} fetchPolicy="network-only">
      {({ data = {} }) => <MovieDetails {...data.movie} />}
    </Query>
  </SectionWrapper>
)

export default Movie