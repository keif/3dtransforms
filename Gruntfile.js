/*jshint node:true */
"use strict";
module.exports = function(grunt) {
	var version,
		settings;
	// build process version. Bump it each time a change is being made.
	version = "0.0.3";
	grunt.log.ok('Build Process v' + version);

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	settings = {};

	require('./grunt-tasks/global/global.js')(grunt, settings);
};