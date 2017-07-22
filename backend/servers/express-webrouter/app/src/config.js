'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// DEV is for localhost with dev tools (watchers, hot server...)
// SANDBOX is for locahost with build and prod server
// STG (staging) is for heroku with prod condition but not the production platform
// PLATFORM heroku with no breaks allowed on it

var IS_SANDBOX = exports.IS_SANDBOX = process.env.NODE_ENV !== 'production' && process.env.TYPE !== 'development';
var IS_DEV = exports.IS_DEV = !IS_SANDBOX && process.env.NODE_ENV !== 'production';
var IS_PROD = exports.IS_PROD = !IS_SANDBOX && process.env.NODE_ENV === 'production';
var IS_LOCALHOST = exports.IS_LOCALHOST = IS_DEV || IS_SANDBOX;