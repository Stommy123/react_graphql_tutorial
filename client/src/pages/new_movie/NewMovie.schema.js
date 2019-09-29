import { GENRES } from '../../constants';

export const schema = {
  id: 'movieForm',
  formHeading: 'Add a new movie!',
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
      label: 'Rate (1-10)',
      type: 'number',
      min: '1',
      max: '10',
      id: 'rate',
      placeholder: 'Rate',
      widget: 'input'
    }
  ]
};
