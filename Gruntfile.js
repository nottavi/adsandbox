module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/app.css' : 'sass/app.scss'
				}
			}
		},
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','cssmin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default',['watch']);
}
