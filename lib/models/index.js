'use strict';

const Fs = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');
const Settings = require('../../settings');

//Database settings for current environment
const dbSettings = Settings[Settings.env].db;

const sequelize = new Sequelize(dbSettings.database, dbSettings.user, dbSettings.password, dbSettings);
const db = {};

// Read all files in this directory and import as models
Fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file != 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(Path.join(__dirname, file));
    db[model.name] = model;
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;
