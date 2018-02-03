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
            target: {
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
            normal: {
                src: 'dist/stack/svg/sprite.stack.svg',
                dest: 'dist/cards.svg',
                replacements: [
                    {
                        from: 'cards--', 
                        to: ''
                    },
                    {
                        from: 'min-width:75px',
                        to: 'min-width:0'
                    }
                ]
            }
        },
        clean: ['dist/stack']
    });
    
    grunt.registerTask('default', ['svg_sprite', 'replace:normal', 'clean']);
};
