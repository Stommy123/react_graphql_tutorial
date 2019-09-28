import React, { useContext } from 'react';
import { useMutation } from 'react-apollo';
import { ModalContext } from '../../context';
import { CreateMovie } from '../../graphql/mutations';
import { FetchMovies } from '../../graphql/queries';
import { Form, SectionWrapper } from '../../components';
import { schema } from './NewMovie.schema';

const NewMovie = ({ history }) => {
  const { setModal } = useContext(ModalContext);
  const handleUpdateCache = (cache, { data: newData = {} }) => {
    const { movies } = cache.readQuery({ query: FetchMovies });
    const newMovie = newData.createMovie;
    cache.writeQuery({ query: FetchMovies, data: { movies: [...movies, newMovie] } });
  };
  const [executeMutation] = useMutation(CreateMovie, { update: handleUpdateCache });
  const handleSubmit = async ({ genre, ...inputData }) => {
    try {
      const parsedGenres = genre && genre.map(({ value }) => value);
      const input = { ...inputData, ...(parsedGenres && { genre: parsedGenres }), duration: '2h15min' };
      const { data = {} } = await executeMutation({
        variables: { input },
        refetchQueries: _ => [{ query: FetchMovies, variables: { where: {} } }]
      });
      const newMovie = data.createMovie || {};
      history.push(`/movie/${newMovie._id}`);
    } catch (e) {
      console.log('error creating new movie', e);
      setModal({ isOpen: true, content: 'There was an error creating the new movie' });
    }
  };
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
      <Form schema={schema} handleSubmit={handleSubmit} />
    </SectionWrapper>
  );
};

export default NewMovie;
