'use strict';

let Event = require('./event'); 
let Mate = require('./mate'); 
let User = require('./user'); 

Event.belongsTo(User, {foreignKey: 'id', targetKey: 'userID'});
Event.belongsTo(Mate, {foreignKey: 'id', targetKey: 'mateID'});
Mate.belongsTo(User, {foreignKey: 'id', targetKey: 'userID'});