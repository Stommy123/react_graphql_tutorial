import { GENRES } from '../../constants';

export const filterTypes = [
  {
    id: 'director',
    type: 'text',
    widget: 'input',
    label: 'Director',
    placeholder: 'Director'
  },
  {
    id: 'year',
    type: 'number',
    widget: 'input',
    label: 'Year',
    placeholder: 'Year'
  },
  {
    id: 'genre',
    widget: 'select',
    label: 'Genre',
    placeholder: 'Genre',
    options: GENRES,
    isMulti: true
  }
];
