module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            my_target: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files: {
                    'css/styles.css': 'css/styles.less'
                }
            }
        },

        watch: {
            css: {
                files: 'css/*.less',
                tasks: ['less'],
                options: {
                    livereload: true,
                },
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};
