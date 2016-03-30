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

### Concatenate JS files

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

### JSHint

JSHint is the linter that we've been using in class and for our projects!  Have
you ever noticed that sometimes, when we fork and clone a repo, that the JSHint
linter doesn't yell at us even when we miss semicolons?  That's because not
every repo has JSHint configured!  One way to get JSHint to work in your text
editor is by using the JSHint grunt plugin

```
npm install grunt-contrib-jshint --save-dev
```

JSHint requires having a .jshintrc file in the root folder, containing valid
JSON.  Create a .jshintrc file and paste the following JSON:

```js
{
  "curly": true, // requires curly braces around blocks
  "eqeqeq": true, // disallows == and !=
  "esversion": 6,
  "jquery": true,
  "latedef": true, // disallows use of variable before it is defined
  "noarg": true,
  "node": true,
  "nonew": true,
  "strict": "global", // requires 'use strict' globally
  "undef": true, // disallows use of undeclared variables
  "unused": true // warning when you have not used a defined variable
}
```

Please refer to the [JSHint Documentation](http://jshint.com/docs/) for more
options that you can add to your .jshintrc file.  The one we use in class is
more extensive!

Now we need load the npm task in our Gruntfile.  Add the following code to the
appropriate section of the Gruntfile.

```js
grunt.loadNpmTasks('grunt-contrib-jshint');
```

Since JSHint isn't a command line task, we don't need to register it as a task.
Simply restart your text editor and watch your code explode with linter errors,
and it will continue to do so as you type.  The code in this repo is full of
missing semicolons and such, so you'll see it immediately!

### General Steps

Overall, the steps for setting up a grunt task is pretty straight-forward.  The
hard part is figuring out how to correctly configure your Gruntfile for the
grunt plugin to work with your code.

1. Find the grunt plug in you want to use
2. Read the documentation on how to configure your Gruntfile
3. Configure the grunt task to work with your code
4. Load npm task in your Gruntfile (grunt.loadNpmTasks)
5. Create a semantic alias for your task (grunt.registerTask)
6. Run the task in command line (grunt taskname)

### Resources
[NPM Grunt Package](https://www.npmjs.com/package/grunt)
[Grunt.js Documentation](http://gruntjs.com/)
[JSHint Documentation](http://jshint.com/docs/)
[Grunt by Example: A Tutorial for JavaScripts Tasks](http://www.brianchu.com/blog/2013/07/11/grunt-by-example-a-tutorial-for-javascripts-task-runner/)
[Get Up Running Grunt](https://www.smashingmagazine.com/2013/10/get-up-running-grunt/)
[Grunt Is Not Weird and Hard](https://24ways.org/2013/grunt-is-not-weird-and-hard/)
[GruntJS Tutorial From Beginner to Ninja](http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja)
