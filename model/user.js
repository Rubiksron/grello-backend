'use strict'

let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  googleID: {type: String, required: true, unique: true},
  name: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  documents: [{type: String, ref: 'documents'}],
  tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'tasks'}],
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'tags'}],
  profilePic: String,
  refreshToken: String,
  accessToken: String,
  tokenTTL: Number,
  tokenTimestamp: Date,
})

module.exports = mongoose.model('users', userSchema)
