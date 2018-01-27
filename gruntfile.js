module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.initConfig({
        svg_sprite		: {
            options		: {
                mode: {
                    stack: true
                }
            },
            your_target: {
                src			: ['cards/**.svg'],
                dest		: 'dist',
                options		: {
                    mode: {
                        stack: true
                    }
                }
            }
        },
        replace: {
            ids: {
              src: 'dist/stack/svg/sprite.stack.svg',
              dest: 'dist/cards.svg',
              replacements: [{
                from: 'cards--', 
                to: ''
              }]
            }
        },
        clean: ['dist/stack']
    });
    
    grunt.registerTask('default', ['svg_sprite', 'replace:ids', 'clean']);
};
