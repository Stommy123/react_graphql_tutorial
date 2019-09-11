import { GENRES } from '../../constants';

export const schema = {
  id: 'movieForm',
  formHeading: 'Create a new movie!',
  submitText: 'Submit!',
  fields: [
    {
      label: 'Title',
      type: 'text',
      id: 'title',
      placeholder: 'title',
      widget: 'input',
      required: true
    },
    {
      label: 'Director',
      type: 'text',
      id: 'director',
      placeholder: 'Director',
      widget: 'input',
      required: true
    },
    {
      id: 'genre',
      label: 'Genre',
      type: 'text',
      isMulti: true,
      placeholder: 'Genre',
      widget: 'select',
      required: true,
      options: GENRES
    },
    {
      label: 'Year',
      type: 'number',
      id: 'year',
      placeholder: 'Year',
      widget: 'input',
      required: true
    },
    {
      label: 'Rate',
      type: 'text',
      id: 'rate',
      placeholder: 'Rate',
      widget: 'input'
    }
  ]
};
