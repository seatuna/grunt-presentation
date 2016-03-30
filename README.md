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

### Some common tasks that developers use Grunt for include:
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
