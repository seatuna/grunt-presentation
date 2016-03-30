module.exports = function(grunt){

  // All upfront config goes in a massive nested object.
  // Task configuration
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
  }); // End of grunt.initConfig

  // Load tasks
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks(''); // package name

  // Register our own custom task alias.
  grunt.registerTask('default', []);
};
