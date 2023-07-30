/*
 * Main Javascript file for gih.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
require('@fortawesome/fontawesome-free');
require('jquery');
require('bootstrap');

require.context(
  '../img', // context folder
  true, // include subdirectories
  /.*/, // RegExp
);

require.context(
  '../geodata', // context folder
  true, // include subdirectories
  /.*/, // RegExp
);

// Your own code
require('./plugins');
require('./script');