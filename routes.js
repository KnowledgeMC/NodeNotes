'use strict';

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
    handler: (request, reply) => {
      reply('New Note');
    },
    config: {
      description: 'Adds a new note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: (request, reply) => {
      reply('This is a note');
    },
    config: {
      description: 'Gets the content of a note'
    }
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: (request, reply) => {
      reply('Edit a note');
    },
    config: {
      description: 'Updates the selected note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}/delete',
    handler: (request, reply) => {
      reply('This note has been deleted');
    },
    config: {
      description: 'Deletes the selected note'
    }
  }



];
