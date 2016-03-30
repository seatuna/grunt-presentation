# Grunt Presentation

This repo was made to go along with a presentation about Grunt.js for WDI.

## What is Grunt.js?

Grunt is a JavaScript task runner.  Developers often have to do repetitive tasks
whether it's during production or in preparation for deployment.  To save time
and effort, Grunt can automate these tasks for you!  Grunt allows you to create
tasks that can be run in the command line.  Similar to when we defined a rake
task to quickly populate our database for our Rails apps, or when we run
db:nuke_pave (not a task native to rake), we must tell Grunt what to do when we
type in the command.

Some common tasks that developers use Grunt for include:
*  Concatenating files
*  Minification
*  Compiling (often CSS from LESS or SASS)
*  Running linters
*  And more!

Grunt can do a lot of things, and there are a ton of grunt plugins you can
install and use!  With grunt plugins, all we have to do is npm install the
plugin, and then configure our Gruntfile.js to work with our code.

The best part is that you only need to do this once.  If you create a task for
something that you need to do every project, you'll just need to copy over your
package.json and Gruntfile.js, npm install, and run your grunt command!

## Code Along

This repo already has a very basic package.json and Gruntfile provided.

If you don't already have grunt-cli installed, do so by running the following:

```
npm install -g grunt-cli
```

This will allow you to run grunt commands on the command line.  Now install
dependencies with npm install.

```
npm install
```

Install the grunt-contrib-concat package.  This is the official grunt package
for file concatenation.

```
npm install --save-dev grunt-contrib-concat
```

Add this code to your Gruntfile, following the pkg line.
```js
distFolder: 'production',
concat: {
  dist: {
    src: ['assets/scripts/*.js'],
    dest: '<%= distFolder %>/main.js'
  }
}
```

You will also need to load npm tasks and register your task.  You can name your
task anything!  It is highly recommended to remain semantic, so you won't forget
what it does.

```js
grunt.loadNpmTasks('grunt-contrib-concat'); // package name

grunt.registerTask('combine', ['concat']); // ('task name', ['grunt task defined in the config'])
```

Your Gruntfile should now look like this:

```js
module.exports = function(grunt){

  // All upfront config goes in a massive nested object.
  // Task configuration
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      distFolder: 'production',
      concat: {
        dist: {
          src: ['assets/scripts/*.js'],
          dest: '<%= distFolder %>/main.js'
        }
      }
  }); // End of grunt.initConfig

  // Load tasks
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks('grunt-contrib-concat'); // package name

  // Register our own custom task alias.
  grunt.registerTask('combine', ['concat']);
};
```

"concat" is the default task name, dist stands for distribution, src (source)
is the path of the source code, and dest (destination) is where the output goes.

Note the line dest: '<%= distFolder %>/main.js'.  <%= %> tells grunt to expand
the text inside into whatever value distFolder has.  It's sort of like a
variable.  You can change the value of distFolder to anything you like, and
the destination folder will be named it.

Now that your Gruntfile is configured, go ahead and run your task!

```
grunt combine
```

We now have a new folder called 'production' with our concatenated main.js file!
