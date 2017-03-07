// Grunt Module
module.exports = function(grunt) {
  //Load All Task
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Write Task Here

    // express
    express: {
      server: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          bases: '.',
        }
      }
    },

    //watch
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['index.html', 'pages/*.html']
      },
      less: {
        files: 'src/stylesheets/*.less',
        tasks: ['less'],
      }
    },

    // open
    open: {
      dev: {
        path: 'http://localhost:9000/',
        app: 'Google Chrome', 
      }
    },

    //concat
    bower_concat: {
      all: {
        dest: {
          'js': 'dist/assets/javascripts/foundation_vendor.js',
          'css': 'dist/assets/stylesheets/foundation_vendor.css',
        },
        mainFiles: {
          'bootstrap' : ['dist/css/bootstrap.css'],
          'smooth-scroll': ['dist/js/smooth-scroll.js']
        },
        bowerOptions: {
          relative: false
        }
      }
    },

    //less
    less: {
      development: {
        options: {
          paths: ['dist/assets/stylesheets']
        },
        files: {
          'dist/assets/stylesheets/result.css': 'src/stylesheets/*.less'
        }
      }
    }

  });

  // Default task(s).
  grunt.registerTask('serve', ['express','open','watch', 'bower_concat', 'less']);

};