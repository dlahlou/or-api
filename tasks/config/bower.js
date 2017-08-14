module.exports = function(grunt) {  
  grunt.config.set('bower', {
    dev: {
      dest: 'assets/bower',
      js_dest: 'assets/js/dependencies/bower_dependencies',
      css_dest: 'assets/styles/bower_styles',
      fonts_dest: 'assets/styles/bower_styles',
      options: {
        expand: true,
        packageSpecific: {
          expand: true,
          'font-awesome': {
            files: [
              'fonts/fontawesome-webfont.eot',
              'fonts/fontawesome-webfont.svg',
              'fonts/fontawesome-webfont.ttf',
              'fonts/fontawesome-webfont.woff',
              'fonts/fontawesome-webfont.woff2',
              'fonts/FontAwesome.otf'
            ]
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');

};