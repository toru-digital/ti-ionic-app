# ti-ionic-dev-app

This app is an example of an ionic project that is set up to be used to develop the [ti-ionic](https://github.com/toru-interactive/ti-ionic) repo.

to set up an app to develop ti-cms...
-------------------------------------
-------------------------------------

*set your app up for sass*

	ionic setup sass

*add bower and npm dependencies*

	bower install ng-cordova-oauth ngCordova --save-dev

	npm install gulp --save;
	npm install gulp-babel --save;
	npm install babel-preset-es2015 --save;
	npm install gulp-concat --save;
	npm install gulp-if --save;
	npm install gulp-jshint --save;
	npm install gulp-minify-css --save;
	npm install gulp-ng-html2js --save;
	npm install gulp-rename --save;
	npm install gulp-sass --save;
	npm install gulp-strip-debug --save;
	npm install gulp-uglify --save;
	npm install gulp-util --save;
	npm install gulp-notify --save;
	npm install gulp-sort --save;
	npm install jshint --save;
	npm install jshint-stylish --save;
	npm install yargs --save;

*add cordova in app broswer plugin*

	cordova plugin add cordova-plugin-inappbrowser

*replace the contents of scss.app.scss with this*

	@import "../www/lib/ti-ionic/src/scss/ti-ionic";

*in your gulpfile, require the ti-ionic tasks and pass argv to them*

	require ('./www/lib/ti-ionic/gulp-tasks/scripts')(gulp, yargs);

*Add the 'ti-wacth task to your gulp watch task'*

	gulp.task (
	  'watch',
	  ['ti-watch'],

	  ...
	);

*set your ionic.project watch patterns to...*

	{
	  ...

	  "watchPatterns": [
		"www/**/*",
		"!www/css/**/*",
		"www/css/**/*.min.css",
		"!www/lib/**/*",
		"www/lib/ti-ionic/tmp/ti-ionic.js"
	  ]
	}

*import the script into www/index.html*

  
  <script src="lib/ti-ionic/tmp/ti-ionic.js"></script>


*linkedin doesn't work with livereload*
