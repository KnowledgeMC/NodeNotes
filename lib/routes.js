'use strict';

//import Home controller module
const Home = require('./controllers/home');
//import Note Controller
const Note = require('./controllers/note');

module.exports = [
  // Define routes here
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('All notes shall appear here');
    },
    config: {
      description: 'Gets all the notes available' //Only for documentation purposes
    }
  },
  {
    method: 'POST',
    path: '/note',
    handler: Note.create,
    config: {
      description: 'Adds a new note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: Note.read,
    config: {
      description: 'Gets the content of a note'
    }
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: Note.update,
    config: {
      description: 'Updates the selected note'
    }
  },
  {
    //Using GET instead of DELETE and add extra /delete path so we can delete just by visiting the URL
    method: 'GET',
    path: '/note/{slug}/delete',
    handler: Note.delete,
    config: {
      description: 'Deletes the selected note'
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: Home,
    config: {
      description: 'Gets all the notes available'
    }
  },



];
