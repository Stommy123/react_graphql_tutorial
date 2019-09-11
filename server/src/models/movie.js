import { Schema, model } from 'mongoose';

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  genre: {
    type: Array,
    required: true
  },
  rate: {
    type: String
  }
});

export const Movie = model('Movie', MovieSchema);
