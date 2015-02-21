module.exports = function(grunt) {
    // require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "bower_components/bootstrap/less/bootstrap.min.css": "bower_components/bootstrap/less/bootstrap.less", // destination file and source file
                    "assets/css/main.min.css": "assets/css/main.less"
                }
            }
        },

        watch: {
            styles: {
                files: ['bower_components/bootstrap/less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'concat', 'watch']);
    grunt.registerTask('w', ['watch']);
};
