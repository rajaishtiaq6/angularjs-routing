module.exports = function (grunt) {
    grunt.initConfig({
    // define source files and their destinations
    uglify: {
        files: { 
            src: ['src/js/angular.min.js','src/js/angular-route.min.js','src/js/main.js'],  // source files mask
            dest: 'dist/js/app.js',    // destination folder
            // expand: true,    // allow dynamic building
            // flatten: true,   // remove all unnecessary nesting
            // ext: '.min.js'   // replace .js to .min.js
        }
    },
    concat: {
      js: {
        src: ['src/js/angular.min.js','src/js/angular-route.min.js','src/js/main.js'],
        dest: 'dist/js/app.js'
      },
         css: {
           src: ['src/css/*.css'],
           dest: 'dist/css/styles.min.css'
         }
    },
    watch: {
        js:  { files: ['src/js/*.js', 'src/css/*.css'], tasks: [ 'concat' ] },
    }
});
// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
// register at least this one task
grunt.registerTask('default', [ 'concat' ]);

};