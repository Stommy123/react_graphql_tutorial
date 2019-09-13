import React, { useContext } from 'react';
import { withApollo } from 'react-apollo';
import { ModalContext } from '../../context';
import { CreateMovie } from '../../graphql/mutations';
import { Form, SectionWrapper } from '../../components';
import { schema } from './NewMovie.schema';


const NewMovie = ({ history, client }) => {
  const { setModal } = useContext(ModalContext);
  const handleSubmit = async formData => {
    try {
      const input = { ...formData, duration: '2h15min' }
      const { data = {} } = await client.mutate({
        mutation: CreateMovie,
        variables: { input }
      })
      const newMovie = data.createMovie || {}
      history.push(`/movie/${newMovie._id}`)
     } catch (e) {
       console.log('error creating new movie', e)
       setModal({ isOpen: true, content: 'There was an error creating the new movie' })
     }
  }
  return (
    <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
      <Form schema={schema} handleSubmit={handleSubmit} />
    </SectionWrapper>
  )
}

export default withApollo(NewMovie);