'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');

module.exports = {
  // Include functions that will handle each request in the routes.js file

  //CREATING a note
  create: (request, reply) => {
    Models.Note
      .create({
        date: new Date(),
        title: request.payload.noteTitle,
        slug: Slugify(request.payload.noteTitle, {lower: true}),
        description: request.payload.noteDescription,
        content: request.payload.noteContent
      })
      .then((result) => {
        // Will generate view later, but return result for now
        reply (result);
      });
  },

  //READING a note
  read: (request, reply) => {
    Models.Note
      .findOne({
        where: {
          slug: request.params.slug
        }
      })
      .then((result) => {
        reply(result);
      });
  },
  //UPDATING a note
  update: (request, reply) => {
    const values = {
      title: request.payload.noteTitle,
      description: request.payload.noteDescription,
      content: request.payload.noteContent
    };

    const options = {
      where: {
        slug: request.params.slug
      }
    };

    Models.Note
      .update(values, options)
      .then(() => {
        Models.note
          .findOne(options)
          .then((result) => {
            reply(result);
          });
      });
  },
  //DELETING a note
  delete: (request, reply) => {
    Models.Note
      .destroy({
        where: {
          slug: request.params.slug
        }
      })
      .then(() => reply.redirect('/'));
  }
}
